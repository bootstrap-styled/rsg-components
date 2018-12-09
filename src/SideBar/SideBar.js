import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import { boxShadow } from '@bootstrap-styled/css-mixins/lib/box-shadow';
import bp from '@bootstrap-styled/css-mixins/lib/breakpoints';
import NavigationStyleguide from '@bootstrap-styled/navigation-bar/lib/NavigationStyleguide/NavigationStyleguide';
import Img from '@bootstrap-styled/v4/lib/Img';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';
import Logo from '../Logo';
import Version from '../Version';

export const defaultProps = {
  logo: {
    logo: null,
    href: 'https://bootstrap-styled.github.io/rsg-components',
    target: '_blank',
    alt: '@bootstrap-styled/rsg-components',
  },
  theme: {
    styleguide: {
      '$rsg-sidebar-box-shadow': {
        xs: 'none',
        md: 'none',
      },
      '$rsg-sidebar-linear-gradient': 'linear-gradient(#3A007D, #B31255)',
      '$rsg-sidebar-logo-padding': '30px 20px 0 20px',
      '$rsg-sidebar-logo-align': 'center',
      '$rsg-sidebar-title-line-height': '1',
      '$rsg-sidebar-title-word-wrap': 'break-word',
      '$rsg-sidebar-logo-svg-height': '35px',
      '$rsg-sidebar-logo-svg-margin': '0 0 0 -8px',
    },
  },
  shadow: true,
  version: null,
};

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** enable or disable the shadow */
  shadow: PropTypes.bool,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-sidebar-box-shadow': PropTypes.object,
      '$rsg-sidebar-linear-gradient': PropTypes.string,
      '$rsg-sidebar-logo-padding': PropTypes.string,
      '$rsg-sidebar-logo-align': PropTypes.string,
      '$rsg-sidebar-title-line-height': PropTypes.string,
      '$rsg-sidebar-title-word-wrap': PropTypes.string,
      '$rsg-sidebar-logo-svg-height': PropTypes.string,
      '$rsg-sidebar-logo-svg-margin': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-import styled from 'styled-components';
to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
  /** Logo attributes in order to render logo. */
  logo: PropTypes.shape({
    /** a webpack import or the <img /> directly */
    logo: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    /** the logo link href */
    href: PropTypes.string,
    /** the logo link target */
    target: PropTypes.string,
    /** the logo link alt */
    alt: PropTypes.string,
  }),
  /** the package version */
  version: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Set title to be rendered. */
  title: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Table of content elements to be rendered. */
  items: PropTypes.node, // eslint-disable-line react/require-default-props
};


/**
 * The SideBar component have many props that can be customized
 * @param props
 * @returns {*}
 * @constructor
 */
const SideBarUnstyled = (props) => {
  const {
    className,
    cssModule,
    logo,
    title,
    version,
    items,
    ...attributes
  } = omit(props, ['theme', 'shadow']);
  return (
    <NavigationStyleguide
      className={mapToCssModules(cn(className, 'navigation'), cssModule)}
      {...attributes}
    >
      <div className="navigation-logo">
        {logo.logo && (
          <Logo className="logo-img">
            {typeof logo.logo === 'string' ? (
              <Img
                className="logo-img"
                src={logo.logo}
                alt={logo.alt}
              />
            ) : logo.logo}
          </Logo>
        )}
        <p className="navigation-title">{title}</p>
        {version && <Version>v{version}</Version>}
      </div>
      <div className="font-weight-bold">
        {items}
      </div>
    </NavigationStyleguide>
  );
};

SideBarUnstyled.defaultProps = defaultProps;
SideBarUnstyled.propTypes = propTypes;

const SideBar = styled(SideBarUnstyled)`
  ${(props) => `
    &.navigation {      
      ${bp.up('xs', props.theme['$grid-breakpoints'], `
        ${boxShadow(props.shadow || props.theme['$enable-shadows'], props.theme.styleguide['$rsg-sidebar-box-shadow'].xs)}
      `)}
      ${bp.up('sm', props.theme['$grid-breakpoints'], `
        ${boxShadow(props.shadow || props.theme['$enable-shadows'], props.theme.styleguide['$rsg-sidebar-box-shadow'].sm)}
      `)}
      .navigation-logo {
        color: white;
        background: ${props.theme.styleguide['$rsg-sidebar-linear-gradient']} !important;
        padding: ${props.theme.styleguide['$rsg-sidebar-logo-padding']};
        text-align: ${props.theme.styleguide['$rsg-sidebar-logo-align']};
        .logo-img {
          & svg {
            height: ${props.theme.styleguide['$rsg-sidebar-logo-svg-height']};
            margin: ${props.theme.styleguide['$rsg-sidebar-logo-svg-margin']};
          }
        }
        .navigation-title {
          line-height: ${props.theme.styleguide['$rsg-sidebar-title-line-height']};
          word-wrap: ${props.theme.styleguide['$rsg-sidebar-title-word-wrap']};
        }
      }
    }
 `}
`;

SideBar.defaultProps = defaultProps;
SideBar.propTypes = propTypes;

/** @component */
export default SideBar;
