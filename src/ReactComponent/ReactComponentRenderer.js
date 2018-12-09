import React from 'react';
import PropTypes from 'prop-types';
import Header from '@bootstrap-styled/v4/lib/Header';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';
import Pathline from '../Pathline';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-react-component-margin-bottom': '40px',
      '$rsg-react-component-header-margin-bottom': '16px',
      '$rsg-react-component-docs-color': '#333',
      '$rsg-react-component-docs-font-size': '16px',
      '$rsg-react-component-tabs-margin-bottom': '16px',
      '$rsg-react-component-tabs-button-margin-bottom': '8px',
      '$rsg-react-component-tabs-overflow-x': 'auto',
      '$rsg-react-component-tabs-max-width': '100%',
      '$rsg-react-component-tabs-webkit-overflow-scrolling': 'touch',
    },
  },
};
/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Name used in id. */
  visibleName: PropTypes.string,
  /** Heading element to be rendered. */
  heading: PropTypes.node.isRequired,
  /** Component directory file path. */
  filepath: PropTypes.string,
  /** Component directory path line. */
  pathLine: PropTypes.string,
  /** Tab buttons elements to be rendered. */
  tabButtons: PropTypes.node,
  /** Tab body element to be rendered. */
  tabBody: PropTypes.node,
  /** Description element to be rendered. */
  description: PropTypes.node,
  /** Documentation element to be rendered. */
  docs: PropTypes.node,
  /** Examples elements to be rendered. */
  examples: PropTypes.node,
  /** Toggle isolated style. */
  isolated: PropTypes.bool,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-react-component-margin-bottom': PropTypes.string,
      '$rsg-react-component-header-margin-bottom': PropTypes.string,
      '$rsg-react-component-docs-color': PropTypes.string,
      '$rsg-react-component-docs-font-size': PropTypes.string,
      '$rsg-react-component-tabs-margin-bottom': PropTypes.string,
      '$rsg-react-component-tabs-button-margin-bottom': PropTypes.string,
      '$rsg-react-component-tabs-overflow-x': PropTypes.string,
      '$rsg-react-component-tabs-max-width': PropTypes.string,
      '$rsg-react-component-tabs-webkit-overflow-scrolling': PropTypes.string,

    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */


const ReactComponentRendererUnstyled = (props) => {
  const {
    className,
    visibleName,
    heading,
    pathLine,
    description,
    docs,
    examples,
    tabButtons,
    tabBody,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <div
      id={`${visibleName}-container`}
      className={mapToCssModules(cn(className, 'rsg-react-component'), cssModule)}
      {...attributes}
    >
      <Header className="rsg-react-component-header">
        {heading}
        {pathLine && <Pathline>{pathLine}</Pathline>}
      </Header>
      {(description || docs) && (
        <div className="rsg-react-component-docs">
          {description}
          {docs}
        </div>
      )}
      {tabButtons && (
        <div className="rsg-react-component-tabs">
          <div className="rsg-react-component-tabs-button">{tabButtons}</div>
          <div className="rsg-react-component-tabs-body">{tabBody}</div>
        </div>
      )}
      {examples}
    </div>
  );
};

ReactComponentRendererUnstyled.defaultProps = defaultProps;
ReactComponentRendererUnstyled.propTypes = propTypes;

const ReactComponentRenderer = styled(ReactComponentRendererUnstyled)` 
  ${(props) => `
    &.rsg-react-component {
      margin-bottom: ${props.theme.styleguide['$rsg-react-component-margin-bottom']};
      .rsg-react-component-header {
        margin-bottom: ${props.theme.styleguide['$rsg-react-component-header-margin-bottom']};
      }
      .rsg-react-component-docs {
        color: ${props.theme.styleguide['$rsg-react-component-docs-color']};
        font-size: ${props.theme.styleguide['$rsg-react-component-docs-font-size']};
      }
      .rsg-react-component-tabs {
        margin-bottom: ${props.theme.styleguide['$rsg-react-component-tabs-margin-bottom']};
        .rsg-react-component-tab-buttons {
          margin-bottom: ${props.theme.styleguide['$rsg-react-component-tabs-button-margin-bottom']};
        }
        .rsg-react-components-tabs-body {
          overflow-x: ${props.theme.styleguide['$rsg-react-component-tabs-overflow-x']};
          max-width: ${props.theme.styleguide['$rsg-react-component-tabs-max-width']};
          -webkit-overflow-scrolling: ${props.theme.styleguide['$rsg-react-component-tabs-webkit-overflow-scrolling']};
        }
      }
    }
 `}
`;

ReactComponentRenderer.defaultProps = defaultProps;
ReactComponentRenderer.propTypes = propTypes;
/** @component */
export default ReactComponentRenderer;
