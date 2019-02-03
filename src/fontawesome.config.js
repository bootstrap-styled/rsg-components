// `library` is needed for injecting the icon it the fontawesome engine
import { library } from '@fortawesome/fontawesome-svg-core';
// Basic icon svg
import {
  faBars,
  faAngleUp,
  faAngleDoubleLeft,
  faCopy,
  faLink,
  faArrowsAlt,
} from '@fortawesome/free-solid-svg-icons';
library.add(
  faBars,
  faAngleUp,
  faAngleDoubleLeft,
  faCopy,
  faLink,
  faArrowsAlt,
);
