import React from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import Fa from '@bootstrap-styled/v4/lib/Fa';
import { hover } from '@bootstrap-styled/css-mixins/lib/hover';
import bp from '@bootstrap-styled/css-mixins/lib/breakpoints';
import cn from 'classnames';
import styled from 'styled-components';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules/lib';
import ToolbarButton from '../ToolbarButton';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-path-line-font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      '$rsg-path-line-color': '#CCCCCC',
      '$rsg-path-line-font-size': '0.8em',
      '$rsg-path-line-copy-button-margin': '0 0 0 4px',
      '$rsg-path-line-copy-button-border': 'none',
      '$rsg-path-line-copy-button-outline': 'none',
      '$rsg-path-line-copy-button-box-shadow': 'none',
      '$rsg-path-line-cursor': 'pointer',
      '$rsg-path-line-icon-color': '#CCCCCC',
      '$rsg-path-line-icon-font-size': '0.8em',
      '$rsg-path-line-icon-cursor': 'pointer',
      '$rsg-path-line-icon-bottom': '3px',
      '$rsg-path-line-icon-hover-color': '#B31255',
      '$rsg-path-line-word-break': 'break-all',
    },
  },
};

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Specified node element will be passed as children of `<PathlineRenderer />` component. */
  children: PropTypes.node, // eslint-disable-line react/require-default-props
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-path-line-font-family': PropTypes.string,
      '$rsg-path-line-color': PropTypes.string,
      '$rsg-path-line-font-size': PropTypes.string,
      '$rsg-path-line-copy-button-margin': PropTypes.string,
      '$rsg-path-line-copy-button-border': PropTypes.string,
      '$rsg-path-line-copy-button-outline': PropTypes.string,
      '$rsg-path-line-copy-button-box-shadow': PropTypes.string,
      '$rsg-path-line-cursor': PropTypes.string,
      '$rsg-path-line-icon-color': PropTypes.string,
      '$rsg-path-line-icon-font-size': PropTypes.string,
      '$rsg-path-line-icon-cursor': PropTypes.string,
      '$rsg-path-line-icon-bottom': PropTypes.string,
      '$rsg-path-line-icon-hover-color': PropTypes.string,
      '$rsg-path-line-word-break': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};

const PathlineRendererUnstyled = (props) => {
  const {
    className,
    cssModule,
    children,
    ...attributes
  } = omit(props, ['theme']);
  return (
    <div
      className={mapToCssModules(cn(className, 'rsg-path-line d-flex justify-content-start'), cssModule)}
      {...attributes}
    >
      {children}
      <ToolbarButton
        className="copy-button"
        onClick={() => copy(children)}
        title="Copy to clipboard"
      >
        <Fa copy />
      </ToolbarButton>
    </div>
  );
};

PathlineRendererUnstyled.defaultProps = defaultProps;
PathlineRendererUnstyled.propTypes = propTypes;


const PathlineRenderer = styled(PathlineRendererUnstyled)` 
  ${(props) => `
    &.rsg-path-line {
      font-family: ${props.theme.styleguide['$rsg-path-line-font-family']};
      word-break: ${props.theme.styleguide['$rsg-path-line-word-break']};
  ${bp.up(
    'xs',
    props.theme['$grid-breakpoints'],
    `
      font-size: 75%;
    `
  )}
  ${bp.up(
    'sm',
    props.theme['$grid-breakpoints'],
    `
      font-size: ${props.theme.styleguide['$rsg-path-line-font-size']};
    `
  )}
      color: ${props.theme.styleguide['$rsg-path-line-color']};
      .copy-button {
        margin: ${props.theme.styleguide['$rsg-path-line-copy-button-margin']};
        &:active, &:focus {
          border: ${props.theme.styleguide['$rsg-path-line-copy-button-border']};
          outline: ${props.theme.styleguide['$rsg-path-line-copy-button-outline']};
          box-shadow: ${props.theme.styleguide['$rsg-path-line-copy-button-box-shadow']};
        }
      }
      & i {
        color: ${props.theme.styleguide['$rsg-path-line-icon-color']};
        font-size: ${props.theme.styleguide['$rsg-path-line-icon-font-size']};
        cursor: ${props.theme.styleguide['$rsg-path-line-icon-cursor']};
        bottom: ${props.theme.styleguide['$rsg-path-line-icon-bottom']};
  ${hover(
    `
      color: ${props.theme.styleguide['$rsg-path-line-icon-hover-color']};

    `
  )}
      }
    }
 `}
`;

PathlineRenderer.defaultProps = defaultProps;
PathlineRenderer.propTypes = propTypes;

export default PathlineRenderer;
