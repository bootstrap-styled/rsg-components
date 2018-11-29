import React from 'react';
import PropTypes from 'prop-types';
import Button from '@bootstrap-styled/v4/lib/Button';
import { hoverFocus } from '@bootstrap-styled/css-mixins/lib/hover';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-tab-button-padding': '8px 0 8px 0',
      '$rsg-tab-button-font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      '$rsg-tab-button-font-size': '15px',
      '$rsg-tab-button-color': '#767676',
      '$rsg-tab-button-background': 'transparent',
      '$rsg-tab-button-text-transform': 'uppercase',
      '$rsg-tab-button-transition': 'color 750ms ease-out',
      '$rsg-tab-button-border': 'none',
      '$rsg-tab-button-cursor': 'pointer',
      '$rsg-tab-button-box-shadow': 'none',
      '$rsg-tab-button-hover-focus-isolate': 'false',
      '$rsg-tab-button-hover-focus-outline': '0',
      '$rsg-tab-button-hover-focus-color': '#f28a25',
      '$rsg-tab-button-hover-focus-transition': 'color 150ms ease-in',
      '$rsg-tab-button-focus-not-active-isolate': 'false',
      '$rsg-tab-button-focus-not-active-outline': '0',
      '$rsg-tab-button-children-isolate': 'false',
      '$rsg-tab-button-children-margin-left': '8px',
      '$rsg-tab-button-border-bottom': '2 #f28a25 solid',
    },
  },
};
/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Display button name. */
  visibleName: PropTypes.string,
  /** Set function passed to onclick button event. */
  onClick: PropTypes.func,
  /** Toggle button active style. */
  active: PropTypes.bool,
  /** Specified node element will be passed as children of `<TabButtonRenderer />` component. */
  children: PropTypes.node,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-tab-button-padding': PropTypes.string,
      '$rsg-tab-button-font-family': PropTypes.string,
      '$rsg-tab-button-font-size': PropTypes.string,
      '$rsg-tab-button-color': PropTypes.string,
      '$rsg-tab-button-background': PropTypes.string,
      '$rsg-tab-button-text-transform': PropTypes.string,
      '$rsg-tab-button-transition': PropTypes.string,
      '$rsg-tab-button-border': PropTypes.string,
      '$rsg-tab-button-cursor': PropTypes.string,
      '$rsg-tab-button-box-shadow': PropTypes.string,
      '$rsg-tab-button-hover-focus-isolate': PropTypes.string,
      '$rsg-tab-button-hover-focus-outline': PropTypes.string,
      '$rsg-tab-button-hover-focus-color': PropTypes.string,
      '$rsg-tab-button-hover-focus-transition': PropTypes.string,
      '$rsg-tab-button-focus-not-active-isolate': PropTypes.string,
      '$rsg-tab-button-focus-not-active-outline': PropTypes.string,
      '$rsg-tab-button-children-isolate': PropTypes.string,
      '$rsg-tab-button-children-margin-left': PropTypes.string,
      '$rsg-tab-button-border-bottom': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */

const TabButtonRendererUnstyled = (props) => {
  const {
    className,
    visibleName,
    onClick,
    active,
    children,
    cssModule,
    ...attributes
  } = omit(props, ['theme', 'pathLine', 'hasExamples']);

  return (
    <Button
      className={mapToCssModules(cn(
        className,
        'rsg-tab-button',
        { active }
      ), cssModule)}
      {...attributes}
      name={visibleName}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

TabButtonRendererUnstyled.defaultProps = defaultProps;
TabButtonRendererUnstyled.propTypes = propTypes;


const TabButtonRenderer = styled(TabButtonRendererUnstyled)` 
  ${(props) => `
    &.rsg-tab-button {
      padding: ${props.theme.styleguide['$rsg-tab-button-padding']};
      font-family: ${props.theme.styleguide['$rsg-tab-button-font-family']};
      font-size: ${props.theme.styleguide['$rsg-tab-button-font-size']};
      color: ${props.theme.styleguide['$rsg-tab-button-color']};
      background: ${props.theme.styleguide['$rsg-tab-button-background']};
      text-transform: ${props.theme.styleguide['$rsg-tab-button-text-transform']};
      transition: ${props.theme.styleguide['$rsg-tab-button-transition']};
      border: ${props.theme.styleguide['$rsg-tab-button-border']};
      cursor: ${props.theme.styleguide['$rsg-tab-button-cursor']};
      box-shadow: ${props.theme.styleguide['$rsg-tab-button-box-shadow']} !important;
  ${hoverFocus(props.theme['$enable-hover-media-query'],
    `
      isolation: ${props.theme.styleguide['$rsg-tab-button-hover-focus-isolate']};
      outline: ${props.theme.styleguide['$rsg-tab-button-hover-focus-outline']};
      color: ${props.theme.styleguide['$rsg-tab-button-hover-focus-color']};
      transition: ${props.theme.styleguide['$rsg-tab-button-hover-focus-transition']};

    `)} 
      &:focus:not($active) {
        isolation: ${props.theme.styleguide['$rsg-tab-button-focus-not-active-isolate']};
        outline: ${props.theme.styleguide['$rsg-tab-button-focus-not-active-outline']};
      }     
      & + & {
        isolation: ${props.theme.styleguide['$rsg-tab-button-children-isolate']};
        margin-left: ${props.theme.styleguide['$rsg-tab-button-children-margin-left']};
      }          
    }
    &.rsg-tab-button.active {
      border-bottom: ${props.theme.styleguide['$rsg-tab-button-border-bottom']};
    }
 `}
`;

TabButtonRenderer.defaultProps = defaultProps;
TabButtonRenderer.propTypes = propTypes;

export default TabButtonRenderer;
