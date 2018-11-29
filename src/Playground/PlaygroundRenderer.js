import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-playground-margin': '0',
      '$rsg-playground-preview-padding': '16px',
      '$rsg-playground-preview-border': '1px #e8e8e8 solid',
      '$rsg-playground-preview-border-radius': '3px',
      '$rsg-playground-preview-width': '100%',
      '$rsg-playground-preview-display': 'inline-block',
      '$rsg-playground-controls-display': 'flex',
      '$rsg-playground-controls-align-items': 'center',
      '$rsg-playground-toolbar-margin': '0 0 0 auto',
    },
  },
};

/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Name used in data-preview. */
  name: PropTypes.string.isRequired,
  /** Preview element to be rendered. */
  preview: PropTypes.node.isRequired,
  /** Preview properties to be rendered. */
  previewProps: PropTypes.object.isRequired,
  /** Tab button to be rendered. */
  tabButtons: PropTypes.node.isRequired,
  /** Tab body to be rendered. */
  tabBody: PropTypes.node.isRequired,
  /** Toolbar to be rendered. */
  toolbar: PropTypes.node.isRequired,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-playground-margin': PropTypes.string,
      '$rsg-playground-preview-padding': PropTypes.string,
      '$rsg-playground-preview-border': PropTypes.string,
      '$rsg-playground-preview-border-radius': PropTypes.string,
      '$rsg-playground-preview-width': PropTypes.string,
      '$rsg-playground-preview-display': PropTypes.string,
      '$rsg-playground-controls-display': PropTypes.string,
      '$rsg-playground-controls-align-items': PropTypes.string,
      '$rsg-playground-toolbar-margin': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */

const PlaygroundRendererUnstyled = (props) => {
  const {
    className,
    name,
    preview,
    previewProps,
    tabButtons,
    tabBody,
    toolbar,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <div
      className={mapToCssModules(cn(className, 'rsg-playground'), cssModule)}
      {...attributes}
    >
      <div
        className="rsg-playground-preview"
        data-preview={name}
        {...previewProps}
      >
        {preview}
      </div>
      <div className="rsg-playground-control d-flex justify-content-between">
        <div>{tabButtons}</div>
        <div className="rsg-playground-toolbar">{toolbar}</div>
      </div>
      <div>{tabBody}</div>
    </div>
  );
};

PlaygroundRendererUnstyled.defaultProps = defaultProps;
PlaygroundRendererUnstyled.propTypes = propTypes;

const PlaygroundRenderer = styled(PlaygroundRendererUnstyled)` 
  ${(props) => `
    &.rsg-playground {
      margin: ${props.theme.styleguide['$rsg-playground-margin']};
      .rsg-playground-preview {
        padding: ${props.theme.styleguide['$rsg-playground-preview-padding']};
        border: ${props.theme.styleguide['$rsg-playground-preview-border']};
        border-radius: ${props.theme.styleguide['$rsg-playground-preview-border-radius']};
        width: ${props.theme.styleguide['$rsg-playground-preview-width']};
        display: ${props.theme.styleguide['$rsg-playground-preview-display']};
      }
      .rsg-playground-control {
        display: ${props.theme.styleguide['$rsg-playground-controls-display']};
        align-items: ${props.theme.styleguide['$rsg-playground-controls-align-items']};
        .rsg-playground-toolbar {
          margin: ${props.theme.styleguide['$rsg-playground-toolbar-margin']};
        }
      }
    }
 `}
`;

PlaygroundRenderer.defaultProps = defaultProps;
PlaygroundRenderer.propTypes = propTypes;

export default PlaygroundRenderer;
