import { useEffect } from 'react';

export default function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return undefined;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const previousScrollY = window.scrollY;
    const { body } = document;
    const previousStyles = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
      paddingRight: body.style.paddingRight
    };

    body.classList.add('no-scroll');
    body.style.position = 'fixed';
    body.style.top = `-${previousScrollY}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.width = '100%';
    body.style.overflow = 'hidden';
    body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      body.classList.remove('no-scroll');
      Object.assign(body.style, previousStyles);
      window.scrollTo(0, previousScrollY);
    };
  }, [locked]);
}
