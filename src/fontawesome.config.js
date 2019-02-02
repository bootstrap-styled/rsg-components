// `library` is needed for injecting the icon it the fontawesome engine
import { library } from '@fortawesome/fontawesome-svg-core';
// Regular icon
import {
} from '@fortawesome/free-regular-svg-icons';
// Basic icon svg
import {
  faBars,
  faAngleUp,
  faCopy,
  faLink,
} from '@fortawesome/free-solid-svg-icons';
// Brand icon svg
import {
} from '@fortawesome/free-brands-svg-icons';
// Initialize icon, this will be allowed anywhere in the app using icon="server",
// or icon={'fab', 'java'} for brand icon
library.add(
  faBars,
  faAngleUp,
  faCopy,
  faLink,
);
