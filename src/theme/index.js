import { makeTheme as makeThemeBootstrapStyled } from 'bootstrap-styled/lib/theme';
import createMakeTheme, { toMakeTheme } from 'bootstrap-styled/lib/utils';
import { makeTheme as makeThemeNavigationStyleguide } from '@bootstrap-styled/navigation-bar/lib/NavigationStyleguide/theme';
import { defaultProps as defaultPropsArgument } from '../Argument/ArgumentRenderer';
import { defaultProps as defaultPropsArguments } from '../Arguments/ArgumentsRenderer';
import { defaultProps as defaultPropsCode } from '../Code/CodeRenderer';
import { defaultProps as defaultPropsComponentsList } from '../ComponentsList/ComponentsListRenderer';
import { defaultProps as defaultPropsEditor } from '../Editor/Editor';
import { defaultProps as defaultPropsEditorLoaderRenderer } from '../Editor/EditorLoaderRenderer';
import { defaultProps as defaultPropsError } from '../Error/ErrorRenderer';
import { defaultProps as defaultPropsExamplePlaceholder } from '../ExamplePlaceholder/ExamplePlaceholderRenderer';
import { defaultProps as defaultPropsExamples } from '../Examples/ExamplesRenderer';
import { defaultProps as defaultPropsFooterRenderer } from '../FooterRenderer/FooterRenderer';
import { defaultProps as defaultPropsHeading } from '../Heading/HeadingRenderer';
import { defaultProps as defaultPropsLink } from '../Link/LinkRenderer';
import { defaultProps as defaultPropsLogo } from '../Logo/LogoRenderer';
import { defaultProps as defaultPropsMessage } from '../Message/MessageRenderer';
import { defaultProps as defaultPropsName } from '../Name/NameRenderer';
import { defaultProps as defaultPropsNotFound } from '../NotFound/NotFoundRenderer';
import { defaultProps as defaultPropsPara } from '../Para/ParaRenderer';
import { defaultProps as defaultPropsPathline } from '../Pathline/PathlineRenderer';
import { defaultProps as defaultPropsPlayground } from '../Playground/PlaygroundRenderer';
import { defaultProps as defaultPropsPlaygroundError } from '../PlaygroundError/PlaygroundErrorRenderer';
import { defaultProps as defaultPropsReactComponent } from '../ReactComponent/ReactComponentRenderer';
import { defaultProps as defaultPropsRibbon } from '../Ribbon/RibbonRenderer';
import { defaultProps as defaultPropsSection } from '../Section/SectionRenderer';
import { defaultProps as defaultPropsSectionHeading } from '../SectionHeading/SectionHeadingRenderer';
import { defaultProps as defaultPropsSideBar } from '../SideBar/SideBar';
import { defaultProps as defaultPropsStyleGuide } from '../StyleGuide/defaultProps';
import { defaultProps as defaultPropsTabButton } from '../TabButton/TabButtonRenderer';
import { defaultProps as defaultPropsTable } from '../Table/TableRenderer';
import { defaultProps as defaultPropsTableOfContents } from '../TableOfContents/TableOfContents';
import { defaultProps as defaultPropsTableOfContentsRenderer } from '../TableOfContents/TableOfContentsRenderer';
import { defaultProps as defaultPropsText } from '../Text/TextRenderer';
import { defaultProps as defaultPropsToolbarButton } from '../ToolbarButton/ToolbarButtonRenderer';
import { defaultProps as defaultPropsType } from '../Type/TypeRenderer';
import { defaultProps as defaultPropsVersion } from '../Version/VersionRenderer';
import { defaultProps as defaultPropsWelcome } from '../Welcome/WelcomeRenderer';

import { makeTheme as makeThemeRsg } from './rsg';
const makeTheme = createMakeTheme([
  toMakeTheme(makeThemeRsg({
    styleguide: {
      '$rsg-sidebar-box-shadow': {
        xs: 'rgba(0, 0, 0, 0.15) 1px 0px 5px 2px',
        md: 'rgba(0, 0, 0, 0.15) 1px 0px 5px 2px',
      },
    },
  })),
  toMakeTheme(makeThemeBootstrapStyled({
    '$enable-shadows': true,
  })),
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
  toMakeTheme(defaultPropsArgument.theme),
  toMakeTheme(defaultPropsArguments.theme),
  toMakeTheme(defaultPropsCode.theme),
  toMakeTheme(defaultPropsComponentsList.theme),
  toMakeTheme(defaultPropsEditor.theme),
  toMakeTheme(defaultPropsEditorLoaderRenderer.theme),
  toMakeTheme(defaultPropsError.theme),
  toMakeTheme(defaultPropsExamplePlaceholder.theme),
  toMakeTheme(defaultPropsExamples.theme),
  toMakeTheme(defaultPropsFooterRenderer.theme),
  toMakeTheme(defaultPropsHeading.theme),
  toMakeTheme(defaultPropsLink.theme),
  toMakeTheme(defaultPropsLogo.theme),
  toMakeTheme(defaultPropsMessage.theme),
  toMakeTheme(defaultPropsName.theme),
  toMakeTheme(defaultPropsNotFound.theme),
  toMakeTheme(defaultPropsPara.theme),
  toMakeTheme(defaultPropsPathline.theme),
  toMakeTheme(defaultPropsPlayground.theme),
  toMakeTheme(defaultPropsPlaygroundError.theme),
  toMakeTheme(defaultPropsReactComponent.theme),
  toMakeTheme(defaultPropsRibbon.theme),
  toMakeTheme(defaultPropsSection.theme),
  toMakeTheme(defaultPropsSectionHeading.theme),
  toMakeTheme(defaultPropsSideBar.theme),
  toMakeTheme(defaultPropsStyleGuide.theme),
  toMakeTheme(defaultPropsTabButton.theme),
  toMakeTheme(defaultPropsTable.theme),
  toMakeTheme(defaultPropsTableOfContents.theme),
  toMakeTheme(defaultPropsTableOfContentsRenderer.theme),
  toMakeTheme(defaultPropsText.theme),
  toMakeTheme(defaultPropsToolbarButton.theme),
  toMakeTheme(defaultPropsType.theme),
  toMakeTheme(defaultPropsVersion.theme),
  toMakeTheme(defaultPropsWelcome.theme),
]);

export default makeTheme();
