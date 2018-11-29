import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';


export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-editor-loader-padding': '2px 8px 2px 2px',
      '$rsg-editor-loader-font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      '$rsg-editor-loader-font-size': '13px',
      '$rsg-editor-loader-color': '#767676',
      '$rsg-editor-loader-background-color': '#f5f5f5',
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
      '$rsg-editor-loader-padding': PropTypes.string,
      '$rsg-editor-loader-font-family': PropTypes.string,
      '$rsg-editor-loader-font-size': PropTypes.string,
      '$rsg-editor-loader-color': PropTypes.string,
      '$rsg-editor-loader-background-color': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */

const EditorLoaderRendererUnstyled = (props) => {
  const {
    className,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <div
      className={mapToCssModules(cn(className, 'rsg-editor-loader'), cssModule)}
      {...attributes}
    >
      Loading…
    </div>
  );
};

EditorLoaderRendererUnstyled.defaultProps = defaultProps;
EditorLoaderRendererUnstyled.propTypes = propTypes;


const EditorLoaderRenderer = styled(EditorLoaderRendererUnstyled)`
  ${(props) => `
    &.rsg-editor-loader {
      padding: ${props.theme.styleguide['$rsg-editor-loader-padding']};
      font-family: ${props.theme.styleguide['$rsg-editor-loader-font-family']};
      font-size: ${props.theme.styleguide['$rsg-editor-loader-font-size']};
      color: ${props.theme.styleguide['$rsg-editor-loader-color']};
      background-color: ${props.theme.styleguide['$rsg-editor-loader-background-color']} !important;
    }
 `}
`;

EditorLoaderRenderer.defaultProps = defaultProps;
EditorLoaderRenderer.propTypes = propTypes;

export default EditorLoaderRenderer;
