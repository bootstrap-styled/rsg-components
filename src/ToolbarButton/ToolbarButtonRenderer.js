import React from 'react';
import PropTypes from 'prop-types';
import Button from '@bootstrap-styled/v4/lib/Button';
import A from '@bootstrap-styled/v4/lib/A';
import { hoverFocus } from '@bootstrap-styled/css-mixins/lib/hover';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-toolbar-button-padding': '2px',
      '$rsg-toolbar-button-color': '#292b2c',
      '$rsg-toolbar-button-background': 'transparent',
      '$rsg-toolbar-button-transition': 'color 750ms ease-out',
      '$rsg-toolbar-button-cursor': 'pointer',
      '$rsg-toolbar-button-hover-focus-isolation': 'false',
      '$rsg-toolbar-button-hover-focus-color': '#B31255',
      '$rsg-toolbar-button-hover-focus-transition': 'color 150ms ease-in',
      '$rsg-toolbar-button-focus-isolation': 'false',
      '$rsg-toolbar-button-focus-outline': '1 dotted #B31255',
      '$rsg-toolbar-button-children-isolation': 'false',
      '$rsg-toolbar-button-children-margin-left': '8px',
      '$rsg-toolbar-button-svg-width': '24px',
      '$rsg-toolbar-button-svg-height': '24px',
      '$rsg-toolbar-button-svg-color': '#CCCCCC',
      '$rsg-toolbar-button-svg-cursor': 'inherit',
      '$rsg-toolbar-button-small-width': '14px',
      '$rsg-toolbar-button-small-height': '14px',
    },
  },
};
/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Set href to `<A />` component. */
  href: PropTypes.string,
  /** Set function passed to onclick button event. */
  onClick: PropTypes.func,
  /** Set href to `<A />` or`<Button />` component. */
  title: PropTypes.string,
  /** Toggle small style. */
  small: PropTypes.bool,
  /** Specified node element will be passed as children of `<ToolbarButtonRenderer />` component. */
  children: PropTypes.node,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-toolbar-button-padding': PropTypes.string,
      '$rsg-toolbar-button-color': PropTypes.string,
      '$rsg-toolbar-button-background': PropTypes.string,
      '$rsg-toolbar-button-transition': PropTypes.string,
      '$rsg-toolbar-button-cursor': PropTypes.string,
      '$rsg-toolbar-button-hover-focus-isolation': PropTypes.string,
      '$rsg-toolbar-button-hover-focus-color': PropTypes.string,
      '$rsg-toolbar-button-hover-focus-transition': PropTypes.string,
      '$rsg-toolbar-button-focus-isolation': PropTypes.string,
      '$rsg-toolbar-button-focus-outline': PropTypes.string,
      '$rsg-toolbar-button-children-isolation': PropTypes.string,
      '$rsg-toolbar-button-children-margin-left': PropTypes.string,
      '$rsg-toolbar-button-svg-width': PropTypes.string,
      '$rsg-toolbar-button-svg-height': PropTypes.string,
      '$rsg-toolbar-button-svg-color': PropTypes.string,
      '$rsg-toolbar-button-svg-cursor': PropTypes.string,
      '$rsg-toolbar-button-small-width': PropTypes.string,
      '$rsg-toolbar-button-small-height': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */

const ToolbarButtonRendererUnstyled = (props) => {
  const {
    className,
    onClick,
    href,
    title,
    small,
    children,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  const classNames = mapToCssModules(
    cn(
      className,
      'rsg-toolbar-button no-print',
      (small && 'small')
    ), cssModule
  );

  if (href !== undefined) {
    return (
      <A
        href={href}
        title={title}
        className={classNames}
        aria-label={title}
        {...attributes}
      >
        {children}
      </A>
    );
  }

  return (
    <Button
      onClick={onClick}
      title={title}
      className={classNames}
      aria-label={title}
      {...attributes}
    >
      {children}
    </Button>
  );
};

ToolbarButtonRendererUnstyled.defaultProps = defaultProps;
ToolbarButtonRendererUnstyled.propTypes = propTypes;

const ToolbarButtonRenderer = styled(ToolbarButtonRendererUnstyled)` 
  ${(props) => `
    &.rsg-toolbar-button {
      padding: ${props.theme.styleguide['$rsg-toolbar-button-padding']};
      color: ${props.theme.styleguide['$rsg-toolbar-button-color']};
      background: ${props.theme.styleguide['$rsg-toolbar-button-background']};
      transition: ${props.theme.styleguide['$rsg-toolbar-button-transition']};
      cursor: ${props.theme.styleguide['$rsg-toolbar-button-cursor']};
  ${hoverFocus(props.theme['$enable-hover-media-query'],
    `
      isolation: ${props.theme.styleguide['$rsg-toolbar-button-hover-focus-isolation']};
      color: ${props.theme.styleguide['$rsg-toolbar-button-hover-focus-color']};
      transition: ${props.theme.styleguide['$rsg-toolbar-button-hover-focus-transition']};
    `)}
      &:focus {
        isolation: ${props.theme.styleguide['$rsg-toolbar-button-focus-isolation']};
        outline: ${props.theme.styleguide['$rsg-toolbar-button-focus-outline']};
      }
      & + & {
        isolation: ${props.theme.styleguide['$rsg-toolbar-button-children-isolation']};
        margin-left: ${props.theme.styleguide['$rsg-toolbar-button-children-margin-left']};
      }
      &:i {
        z-index: 1200;
        width: ${props.theme.styleguide['$rsg-toolbar-button-svg-width']};
        height: ${props.theme.styleguide['$rsg-toolbar-button-svg-height']};
        color: ${props.theme.styleguide['$rsg-toolbar-button-svg-color']};
        cursor: ${props.theme.styleguide['$rsg-toolbar-button-svg-cursor']};
      }
    }
    &.toolbar-button .small {
      &:i {
        width: ${props.theme.styleguide['$rsg-toolbar-button-small-width']};
        height: ${props.theme.styleguide['$rsg-toolbar-button-small-height']};
      }
    }
 `}
`;

ToolbarButtonRenderer.defaultProps = defaultProps;
ToolbarButtonRenderer.propTypes = propTypes;

export default ToolbarButtonRenderer;
