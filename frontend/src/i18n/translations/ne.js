import { about } from './about';
import { academic } from './academic';
import { admission } from './admission';
import { campus } from './campus';
import { chrome } from './chrome';
import { clubs } from './clubs';
import { contact } from './contact';
import { facilities } from './facilities';
import { hallOfFame } from './hallOfFame';
import { home } from './home';
import { shell } from './shell';

/**
 * English -> Nepali map for the whole site. The shared chrome sits underneath so
 * each page dictionary wins over it, and `chrome` comes last because its keys
 * were written against the exact rendered text nodes of the navbar, footer and
 * modals.
 */
export const ne = {
  ...shell,
  ...home,
  ...about,
  ...academic,
  ...admission,
  ...campus,
  ...facilities,
  ...hallOfFame,
  ...clubs,
  ...contact,
  ...chrome,
};
