import { makeTheme as makeThemeBootstrapStyled } from 'bootstrap-styled/lib/theme';
import createMakeTheme, { toMakeTheme } from 'bootstrap-styled/lib/utils';
import { makeTheme as makeThemeNavigationStyleguide } from '@bootstrap-styled/navigation-bar/lib/NavigationStyleguide/theme';

import { makeTheme as makeThemeRsg } from './rsg';

const makeTheme = createMakeTheme([
  toMakeTheme(makeThemeNavigationStyleguide({
    navigationStyleguide: {
      '$nav-styleguide-bg-color': 'white',
      '$nav-styleguide-border': '1px solid #CCC',
      '$nav-styleguide-width': {
        sm: '100%',
        md: '260px',
      },
    },
  })),
  makeThemeRsg,
  makeThemeBootstrapStyled,
]);

export default makeTheme();
