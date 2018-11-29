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
      '$rsg-markdown-pre-font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;',
      '$rsg-markdown-pre-font-size': '13px',
      '$rsg-markdown-pre-line-height': '1.5',
      '$rsg-markdown-pre-color': '#333',
      '$rsg-markdown-pre-white-space': 'pre',
      '$rsg-markdown-pre-background-color': '#f5f5f5',
      '$rsg-markdown-pre-padding': '8px 16px',
      '$rsg-markdown-pre-border': '1px #e8e8e8 solid',
      '$rsg-markdown-pre-border-radius': '3px',
      '$rsg-markdown-pre-margin': '0 0 16px 0',
    },
  },
};
/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  children: PropTypes.node.isRequired,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-markdown-pre-font-family': PropTypes.string,
      '$rsg-markdown-pre-font-size': PropTypes.string,
      '$rsg-markdown-pre-line-height': PropTypes.string,
      '$rsg-markdown-pre-color': PropTypes.string,
      '$rsg-markdown-pre-white-space': PropTypes.string,
      '$rsg-markdown-pre-background-color': PropTypes.string,
      '$rsg-markdown-pre-padding': PropTypes.string,
      '$rsg-markdown-pre-border': PropTypes.string,
      '$rsg-markdown-pre-border-radius': PropTypes.string,
      '$rsg-markdown-pre-margin': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */


const PreRendererUnstyled = (props) => {
  const {
    className,
    children,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <Pre
      className={mapToCssModules(cn(className, 'rsg-markdown-pre'), cssModule)}
      {...attributes}
    >
      {children}
    </Pre>
  );
};

PreRendererUnstyled.defaultProps = defaultProps;
PreRendererUnstyled.propTypes = propTypes;

const PreRenderer = styled(PreRendererUnstyled)` 
  ${(props) => `
    &.rsg-markdown-pre {
      font-family: ${props.theme.styleguide['$rsg-markdown-pre-font-family']};
      font-size: ${props.theme.styleguide['$rsg-markdown-pre-font-size']};
      line-height: ${props.theme.styleguide['$rsg-markdown-pre-line-height']};
      color: ${props.theme.styleguide['$rsg-markdown-pre-color']} !important;
      white-space: ${props.theme.styleguide['$rsg-markdown-pre-white-space']};
      background-color: ${props.theme.styleguide['$rsg-markdown-pre-background-color']};
      padding: ${props.theme.styleguide['$rsg-markdown-pre-padding']};
      border: ${props.theme.styleguide['$rsg-markdown-pre-border']};
      border-radius: ${props.theme.styleguide['$rsg-markdown-pre-border-radius']};
      margin: ${props.theme.styleguide['$rsg-markdown-pre-margin']};
    }
 `}
`;

PreRenderer.defaultProps = defaultProps;
PreRenderer.propTypes = propTypes;

export default PreRenderer;
