import React from 'react';
import PropTypes from 'prop-types';
import H1 from '@bootstrap-styled/v4/lib/H1';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-logo-color': '#fff',
      '$rsg-logo-margin': '0',
      '$rsg-logo-font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      '$rsg-logo-font-size': '18px',
      '$rsg-logo-font-weight': 'normal',
    },
  },
};

/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-logo-color': PropTypes.string,
      '$rsg-logo-margin': PropTypes.string,
      '$rsg-logo-font-family': PropTypes.string,
      '$rsg-logo-font-size': PropTypes.string,
      '$rsg-logo-font-weight': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */

const LogoRendererUnstyled = (props) => {
  const {
    className,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <H1
      className={mapToCssModules(cn(className, 'rsg-logo'), cssModule)}
      {...attributes}
    />
  );
};

LogoRendererUnstyled.defaultProps = defaultProps;
LogoRendererUnstyled.propTypes = propTypes;

const LogoRenderer = styled(LogoRendererUnstyled)`
  ${(props) => `
    &.rsg-logo {
      color: ${props.theme.styleguide['$rsg-logo-color']};
      margin: ${props.theme.styleguide['$rsg-logo-margin']};
      font-family: ${props.theme.styleguide['$rsg-logo-font-family']};
      font-size: ${props.theme.styleguide['$rsg-logo-font-size']};
      font-weight: ${props.theme.styleguide['$rsg-logo-font-weight']};
    }
 `}
`;

LogoRenderer.defaultProps = defaultProps;
LogoRenderer.propTypes = propTypes;

export default LogoRenderer;
