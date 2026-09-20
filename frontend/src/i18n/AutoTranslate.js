import { useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { ne } from './translations/ne';

/** Whitespace in JSX text nodes is insignificant, so keys are matched trimmed. */
const lookup = new Map(
  Object.entries(ne)
    .map(([english, nepali]) => [english.replace(/\s+/g, ' ').trim(), nepali])
    .filter(([english]) => english.length > 0)
);

const NEPALI_GLYPHS = /[\u0900-\u097F]/;
const TRANSLATABLE_ATTRS = ['placeholder', 'aria-label', 'title', 'alt'];
const SKIP_SELECTOR = '[data-i18n="off"]';

const normalize = (text) => text.replace(/\s+/g, ' ').trim();

const wrap = (original, key, value) =>
  `${original.slice(0, original.indexOf(key))}${value}${original.slice(original.indexOf(key) + key.length)}`;

/**
 * React still owns the English source of these nodes, so it never restores them
 * on its own. We remember what we overwrote and hand it back on the way out.
 */
const originalText = new Map();
const originalAttrs = new Map();

const translateElement = (root) => {
  const acceptNode = (node) =>
    node.parentElement?.closest(SKIP_SELECTOR) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, acceptNode);
  const pending = [];

  let node = walker.nextNode();
  while (node) {
    const original = originalText.get(node) ?? node.data;
    if (!NEPALI_GLYPHS.test(original)) {
      const key = normalize(original);
      const value = lookup.get(key);
      if (value && value !== original) {
        originalText.set(node, original);
        pending.push([node, wrap(original, key, value)]);
      }
    }
    node = walker.nextNode();
  }

  pending.forEach(([node, text]) => {
    node.data = text;
  });

  const nodes = [root, ...(root.querySelectorAll?.(`[${TRANSLATABLE_ATTRS.join('],[')}]`) ?? [])];
  nodes.forEach((element) => {
    if (element.closest(SKIP_SELECTOR)) return;
    const saved = originalAttrs.get(element) ?? {};
    TRANSLATABLE_ATTRS.forEach((attr) => {
      const original = element.getAttribute?.(attr);
      if (original === null) return;
      const baseline = saved[attr] ?? original;
      if (NEPALI_GLYPHS.test(baseline)) return;
      const value = lookup.get(normalize(baseline));
      if (value && value !== baseline) {
        saved[attr] = baseline;
        element.setAttribute(attr, wrap(baseline, normalize(baseline), value));
      }
    });
    if (Object.keys(saved).length) originalAttrs.set(element, saved);
  });
};

const restore = () => {
  originalText.forEach((text, node) => {
    if (node.isConnected) node.data = text;
    originalText.delete(node);
  });
  originalAttrs.forEach((attrs, element) => {
    if (element.isConnected) {
      Object.entries(attrs).forEach(([attr, value]) => element.setAttribute(attr, value));
    }
    originalAttrs.delete(element);
  });
};

/**
 * Rewrites rendered text nodes and form labels into Nepali. Covers every page
 * without threading a translator through each component; React re-renders are
 * caught by the observer and translated again.
 */
export const AutoTranslate = ({ children }) => {
  const { lang } = useLanguage();

  useEffect(() => {
    if (lang !== 'ne') {
      restore();
      return undefined;
    }

    const translate = () => translateElement(document.body);
    translate();

    const observer = new MutationObserver((records) => {
      // Ignore our own writes, otherwise translating feeds the observer forever.
      if (records.some((record) => record.target.nodeType === Node.TEXT_NODE)) return;
      translate();
    });

    observer.observe(document.body, { subtree: true, childList: true, characterData: true });

    return () => observer.disconnect();
  }, [lang]);

  return children;
};

export default AutoTranslate;
