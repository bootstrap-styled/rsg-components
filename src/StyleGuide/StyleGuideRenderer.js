import React, { Component } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import bp from '@bootstrap-styled/css-mixins/lib/breakpoints';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
import Fa from '@bootstrap-styled/v4/lib/Fa';
import { hover } from '@bootstrap-styled/css-mixins/lib/hover';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';
import SideBar from '../SideBar';
import FooterRenderer from '../FooterRenderer';
import Ribbon from '../Ribbon';
import defaultTheme from '../theme';

export const defaultProps = {
  hasSidebar: true,
  theme: defaultTheme,
  reset: true,
  injectGlobal: true,
  shadow: true,
  logoMenu: {
    logo: null,
    href: null,
    target: null,
    text: null,
    alt: null,
  },
  logoFooter: {
    logo: null,
    height: null,
    href: null,
    target: null,
    text: null,
    alt: null,
  },
};

/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** enable the shadow */
  shadow: PropTypes.bool,
  /** Set title used in `<SideBar />` component. */
  title: PropTypes.string.isRequired,
  /** @ignore */
  children: PropTypes.node.isRequired,
  /** An instance of TableOfContentsRenderer */
  toc: PropTypes.node.isRequired,
  /** Version of documentation. */
  version: PropTypes.string,
  /** Toggle sidebar style. */
  hasSidebar: PropTypes.bool,
  /** Logo attributes in order to render menu logo. */
  logoMenu: PropTypes.shape({
    logo: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    href: PropTypes.string,
    target: PropTypes.string,
    text: PropTypes.string,
    alt: PropTypes.string,
  }),
  /** Logo attributes in order to render footer logo. */
  logoFooter: PropTypes.shape({
    logo: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    height: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    text: PropTypes.string,
    alt: PropTypes.string,
  }),
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-styleguide-background-color': PropTypes.string,
      '$rsg-styleguide-has-sidebar-padding-left': PropTypes.shape({
        xs: PropTypes.string,
        sm: PropTypes.string,
        md: PropTypes.string,
        lg: PropTypes.string,
      }),
      '$rsg-styleguide-content-max-width': PropTypes.string,
      '$rsg-styleguide-content-margin': PropTypes.string,
      '$rsg-styleguide-content-display': PropTypes.string,
      '$rsg-styleguide-no-print-display': PropTypes.string,
      '$rsg-styleguide-content-transition': PropTypes.string,
      '$rsg-styleguide-content-padding': PropTypes.shape({
        xs: PropTypes.string,
        lg: PropTypes.string,
      }),
      '$rsg-styleguide-content-width': PropTypes.shape({
        md: PropTypes.string,
        lg: PropTypes.string,
      }),
      '$rsg-styleguide-content-sidebar-open-transform': PropTypes.shape({
        md: PropTypes.string,
        lg: PropTypes.string,
      }),
      '$rsg-styleguide-sidebar-z-index': PropTypes.string,
      '$rsg-styleguide-sidebar-transform': PropTypes.string,
      '$rsg-styleguide-sidebar-open-transition': PropTypes.string,
      '$rsg-styleguide-sidebar-open-transform': PropTypes.shape({
        md: PropTypes.string,
        lg: PropTypes.string,
      }),
      '$rsg-styleguide-sidebar-close-transition': PropTypes.string,
      '$rsg-styleguide-sidebar-close-transform': PropTypes.shape({
        md: PropTypes.string,
        lg: PropTypes.string,
      }),
      '$rsg-styleguide-sidebar-button-transform': PropTypes.string,
      '$rsg-styleguide-sidebar-button-padding': PropTypes.string,
      '$rsg-styleguide-sidebar-button-color': PropTypes.string,
      '$rsg-styleguide-sidebar-button-box-shadow': PropTypes.string,
      '$rsg-styleguide-sidebar-button-position': PropTypes.string,
      '$rsg-styleguide-sidebar-button-transition': PropTypes.string,
      '$rsg-styleguide-sidebar-button-hover-color': PropTypes.string,
      '$rsg-styleguide-sidebar-button-outline': PropTypes.string,
      '$rsg-styleguide-sidebar-button-visibility': PropTypes.shape({
        xs: PropTypes.string,
        md: PropTypes.string,
        lg: PropTypes.string,
      }),
      '$rsg-styleguide-sidebar-open-button-transition': PropTypes.string,
      '$rsg-styleguide-sidebar-open-button-transform': PropTypes.string,
      '$rsg-styleguide-sidebar-close-button-transition': PropTypes.string,
      '$rsg-styleguide-sidebar-close-button-z-index': PropTypes.string,
      '$rsg-styleguide-sidebar-close-button-transform': PropTypes.shape({
        sm: PropTypes.string,
        md: PropTypes.string,
        lg: PropTypes.string,
      }),
    }),
  }),
  reset: PropTypes.bool,
  injectGlobal: PropTypes.bool,
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */

/**
 * The StyleGuideRenderer is the layout UI entrypoint. It is also described in react-styleguidist API with possibility to override using webpack alias.
 * You can use it to create your own StyleGuideRenderer. New layout can also be created from scracth, making infinite possibilities of customization
 * See: https://rollup-umd.github.io/documentation.
 */
class StyleGuideRendererUnstyled extends Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  state = {
    isOpenSidebar: false,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (this.state.isOpenSidebar !== nextState.isOpenSidebar) || (this.props.children !== nextProps.children);
  }

  toggleSideBar = () => {
    this.setState({
      isOpenSidebar: !this.state.isOpenSidebar,
    });
  };

  render() {
    const {
      className,
      title,
      version,
      children,
      toc,
      hasSidebar,
      logoMenu,
      logoFooter,
      cssModule,
      shadow,
      ...attributes
    } = omit(this.props, ['homepageUrl', 'theme', 'injectGlobal', 'reset']);
    const { isOpenSidebar } = this.state;
    return (
      <div
        className={mapToCssModules(cn(
          className,
          'rsg-styleguide',
          { 'has-sidebar': hasSidebar }
        ), cssModule)}
        {...attributes}
      >
        {hasSidebar && (
          <div>
            <div
              className={`sidebar-button ${isOpenSidebar ? 'sidebar-open' : 'sidebar-close'}`}
              role="button"
              tabIndex="0"
              onClick={() => this.toggleSideBar()}
              onKeyPress={() => this.toggleSideBar()}
            >
              <Fa
                size="lg"
                bars
              />
            </div>
            <SideBar className={`sidebar ${isOpenSidebar ? 'sidebar-open' : 'sidebar-close'}`} version={version} logo={logoMenu} title={title} items={toc} shadow={shadow} />
            <Ribbon />
          </div>
        )}
        <main className={`content ${isOpenSidebar && hasSidebar ? 'sidebar-open' : 'sidebar-close'}`} >
          {children}
          {logoFooter.logo && <FooterRenderer logo={logoFooter} />}
        </main>
      </div>
    );
  }
}

const StyleGuideRendererStyled = styled(StyleGuideRendererUnstyled)` 
  ${(props) => `
    &.rsg-styleguide {
      @media print{
         .no-print {
             display: ${props.theme.styleguide['$rsg-styleguide-no-print-display']};
         }
      }
      background-color: ${props.theme.styleguide['$rsg-styleguide-background-color']};
      .content {
        max-width: ${props.theme.styleguide['$rsg-styleguide-content-max-width']};
        margin: ${props.theme.styleguide['$rsg-styleguide-content-margin']};
        display: ${props.theme.styleguide['$rsg-styleguide-content-display']};
        transition: ${props.theme.styleguide['$rsg-styleguide-content-transition']};
  ${bp.up(
    'xs',
    props.theme['$grid-breakpoints'],
    `
      padding: ${props.theme.styleguide['$rsg-styleguide-content-padding'].xs};
    `
  )}
  ${bp.up(
    'md',
    props.theme['$grid-breakpoints'],
    `
      width: ${props.theme.styleguide['$rsg-styleguide-content-width'].md};
    `
  )}
  ${bp.up(
    'lg',
    props.theme['$grid-breakpoints'],
    `
      width: ${props.theme.styleguide['$rsg-styleguide-content-width'].lg};
      padding: ${props.theme.styleguide['$rsg-styleguide-content-padding'].lg};
    `
  )}
      }
    }
    .content.sidebar-close {
  ${bp.up(
    'md',
    props.theme['$grid-breakpoints'],
    `
      transform: ${props.theme.styleguide['$rsg-styleguide-content-sidebar-close-transform']}
    `
  )} 
  }
    &.has-sidebar {
  ${bp.up(
    'xs',
    props.theme['$grid-breakpoints'],
    `
      padding-left: ${props.theme.styleguide['$rsg-styleguide-has-sidebar-padding-left'].xs};
    `
  )}
  ${bp.up(
    'sm',
    props.theme['$grid-breakpoints'],
    `
      padding-left: ${props.theme.styleguide['$rsg-styleguide-has-sidebar-padding-left'].xs};
    `
  )}
  ${bp.up(
    'md',
    props.theme['$grid-breakpoints'],
    `
      padding-left: ${props.theme.styleguide['$rsg-styleguide-has-sidebar-padding-left'].md};
    `
  )}
  ${bp.up(
    'lg',
    props.theme['$grid-breakpoints'],
    `
      padding-left: ${props.theme.styleguide['$rsg-styleguide-has-sidebar-padding-left'].lg};
    `
  )}
    }
    & .sidebar {
    z-index: ${props.theme.styleguide['$rsg-styleguide-sidebar-z-index']};
  ${bp.up(
    'lg',
    props.theme['$grid-breakpoints'],
    `
      transform: ${props.theme.styleguide['$rsg-styleguide-sidebar-transform']};
    `
  )}
    }
    & .sidebar.sidebar-open {
    transition: ${props.theme.styleguide['$rsg-styleguide-sidebar-open-transition']};
  ${bp.up(
    'md',
    props.theme['$grid-breakpoints'],
    `
      transform: ${props.theme.styleguide['$rsg-styleguide-sidebar-open-transform'].md};
    `
  )}
  ${bp.up(
    'lg',
    props.theme['$grid-breakpoints'],
    `
      transform: ${props.theme.styleguide['$rsg-styleguide-sidebar-open-transform'].lg};
    `
  )}
    }
    & .sidebar.sidebar-close {
    transition: ${props.theme.styleguide['$rsg-styleguide-sidebar-close-transition']};
  ${bp.up(
    'md',
    props.theme['$grid-breakpoints'],
    `
      transform: ${props.theme.styleguide['$rsg-styleguide-sidebar-close-transform'].md};
    `
  )}
  ${bp.up(
    'lg',
    props.theme['$grid-breakpoints'],
    `
      transform: ${props.theme.styleguide['$rsg-styleguide-sidebar-close-transform'].lg};
    `
  )}
    }
    & .sidebar-button {
      transform: ${props.theme.styleguide['$rsg-styleguide-sidebar-button-transform']};
      padding: ${props.theme.styleguide['$rsg-styleguide-sidebar-button-padding']};
      color: ${props.theme.styleguide['$rsg-styleguide-sidebar-button-color']};
      box-shadow: ${props.theme.styleguide['$rsg-styleguide-sidebar-button-box-shadow']};
      position: ${props.theme.styleguide['$rsg-styleguide-sidebar-button-position']};
      transition: ${props.theme.styleguide['$rsg-styleguide-sidebar-button-transition']};
      top: 30px;
      z-index: 4999;
  ${hover(`
    color: ${props.theme.styleguide['$rsg-styleguide-sidebar-button-hover-color']};
  `)} 
      &:focus, &:active {
        outline: ${props.theme.styleguide['$rsg-styleguide-sidebar-button-outline']};
      }
  ${bp.up(
    'xs',
    props.theme['$grid-breakpoints'],
    `
      visibility: ${props.theme.styleguide['$rsg-styleguide-sidebar-button-visibility'].xs};
    `
  )}
  ${bp.up(
    'md',
    props.theme['$grid-breakpoints'],
    `
      visibility: ${props.theme.styleguide['$rsg-styleguide-sidebar-button-visibility'].md};
    `
  )}
  ${bp.up(
    'lg',
    props.theme['$grid-breakpoints'],
    `
      visibility: ${props.theme.styleguide['$rsg-styleguide-sidebar-button-visibility'].lg};
    `
  )}
    }
    & .sidebar-button.sidebar-open {
    transition: ${props.theme.styleguide['$rsg-styleguide-sidebar-open-button-transition']};
  ${bp.up(
    'md',
    props.theme['$grid-breakpoints'],
    `
      transform: ${props.theme.styleguide['$rsg-styleguide-sidebar-open-button-transform']};
      color: white;
    `
  )}
    }
    & .sidebar-button.sidebar-close {
    transition: ${props.theme.styleguide['$rsg-styleguide-sidebar-close-button-transition']};
 ${bp.down(
    'sm',
    props.theme['$grid-breakpoints'],
    `
      z-index: ${props.theme.styleguide['$rsg-styleguide-sidebar-close-button-z-index']};
      transform: ${props.theme.styleguide['$rsg-styleguide-sidebar-close-button-transform'].sm};
    `
  )}
  ${bp.up(
    'md',
    props.theme['$grid-breakpoints'],
    `
      transform: ${props.theme.styleguide['$rsg-styleguide-sidebar-close-button-transform'].md};
    `
  )}
  ${bp.up(
    'lg',
    props.theme['$grid-breakpoints'],
    `
      transform: ${props.theme.styleguide['$rsg-styleguide-sidebar-close-button-transform'].lg};
    `
  )}
    }
 `}
`;

StyleGuideRendererStyled.defaultProps = defaultProps;
StyleGuideRendererStyled.propTypes = propTypes;

class StyleGuideRenderer extends React.Component { // eslint-disable-line react/prefer-stateless-function, react/no-multi-comp
  render() {
    const { theme, reset, injectGlobal, ...rest } = this.props;
    return (
      <BootstrapProvider
        theme={theme}
        reset={reset}
        injectGlobal={injectGlobal}
      >
        <StyleGuideRendererStyled {...rest} />
      </BootstrapProvider>
    );
  }
}

StyleGuideRenderer.defaultProps = defaultProps;
StyleGuideRenderer.propTypes = propTypes;

export default StyleGuideRenderer;
