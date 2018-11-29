import React from 'react';
import PropTypes from 'prop-types';
import Pre from '@bootstrap-styled/v4/lib/Pre';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';


export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-playground-error-margin': '0',
      '$rsg-playground-error-line-height': '1.2',
      '$rsg-playground-error-font-size': '13px',
      '$rsg-playground-error-font-family': 'Consolas, "Liberation Mono", Menlo, monospace',
      '$rsg-playground-error-color': '#c00',
      '$rsg-playground-error-white-space': 'pre-wrap',
    },
  },
};

/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** String passed as children to `<PlaygroundErrorRenderer />`. */
  message: PropTypes.string.isRequired,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-playground-error-margin': PropTypes.string,
      '$rsg-playground-error-line-height': PropTypes.string,
      '$rsg-playground-error-font-size': PropTypes.string,
      '$rsg-playground-error-font-family': PropTypes.string,
      '$rsg-playground-error-color': PropTypes.string,
      '$rsg-playground-error-white-space': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */


const PlaygroundErrorRendererUnstyled = (props) => {
  const {
    className,
    message,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <Pre
      className={mapToCssModules(cn(className, 'rsg-playground-error'), cssModule)}
      {...attributes}
    >
      {message}
    </Pre>
  );
};

PlaygroundErrorRendererUnstyled.defaultProps = defaultProps;
PlaygroundErrorRendererUnstyled.propTypes = propTypes;

const PlaygroundErrorRenderer = styled(PlaygroundErrorRendererUnstyled)` 
  ${(props) => `
    &.rsg-playground-error {
      margin: ${props.theme.styleguide['$rsg-playground-error-margin']};
      line-height: ${props.theme.styleguide['$rsg-playground-error-line-height']};
      font-size: ${props.theme.styleguide['$rsg-playground-error-font-size']};
      font-family; ${props.theme.styleguide['$rsg-playground-error-font-family']};
      color: ${props.theme.styleguide['$rsg-playground-error-color']};
      white-space: ${props.theme.styleguide['$rsg-playground-error-white-space']};
    }
 `}
`;

PlaygroundErrorRenderer.defaultProps = defaultProps;
PlaygroundErrorRenderer.propTypes = propTypes;

export default PlaygroundErrorRenderer;
