import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';
import P from '@bootstrap-styled/v4/lib/P';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-version-color': 'lightgray',
      '$rsg-version-margin': '0',
      '$rsg-version-font-family': 'inherit',
      '$rsg-version-font-size': '15px',
    },
  },
};

/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /**
   * @ignore
   */
  children: PropTypes.node, // eslint-disable-line react/require-default-props
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-version-color': PropTypes.string,
      '$rsg-version-margin': PropTypes.string,
      '$rsg-version-font-family': PropTypes.string,
      '$rsg-version-font-size': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */


const VersionRendererUnstyled = (props) => {
  const {
    className,
    children,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (

    <P className={mapToCssModules(cn(className, 'rsg-version'), cssModule)} aria-label="version" {...attributes}>
      {children}
    </P>
  );
};

VersionRendererUnstyled.defaultProps = defaultProps;
VersionRendererUnstyled.propTypes = propTypes;

const VersionRenderer = styled(VersionRendererUnstyled)` 
  ${(props) => `
    &.rsg-version {
    color: ${props.theme.styleguide['$rsg-version-color']};
    margin: ${props.theme.styleguide['$rsg-version-margin']};
    font-family: ${props.theme.styleguide['$rsg-version-font-family']};
    font-size: ${props.theme.styleguide['$rsg-version-font-size']};
    }
 `}
`;

VersionRenderer.defaultProps = defaultProps;
VersionRenderer.propTypes = propTypes;

export default VersionRenderer;
