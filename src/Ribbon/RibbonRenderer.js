import React from 'react';
import PropTypes from 'prop-types';
import A from '@bootstrap-styled/v4/lib/A';
import bp from '@bootstrap-styled/css-mixins/lib/breakpoints';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-ribbon-bp-visibility': {
        xs: 'hidden',
        md: 'visible',
      },
      '$rsg-ribbon-position': 'fixed',
      '$rsg-ribbon-top': '0',
      '$rsg-ribbon-right': '0',
      '$rsg-ribbon-width': '149px',
      '$rsg-ribbon-height': '149px',
      '$rsg-ribbon-z-index': '999',
      '$rsg-ribbon-link-font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      '$rsg-ribbon-link-position': 'relative',
      '$rsg-ribbon-link-right': '-37px',
      '$rsg-ribbon-link-top': '-22px',
      '$rsg-ribbon-link-display': 'block',
      '$rsg-ribbon-link-width': '190px',
      '$rsg-ribbon-link-padding': '4px 8px',
      '$rsg-ribbon-link-text-align': 'center',
      '$rsg-ribbon-link-color': '#fff',
      '$rsg-ribbon-link-font-size': '15px',
      '$rsg-ribbon-link-background': 'linear-gradient( to right, #B31255, #3A007D)',
      '$rsg-ribbon-link-decoration': 'none',
      '$rsg-ribbon-link-shadow': '0 -1px 0 rgba(0,0,0,.15)',
      '$rsg-ribbon-link-transform-origin': '0 0',
      '$rsg-ribbon-link-transform': 'rotate(45deg)',
      '$rsg-ribbon-link-cursor': 'pointer',
    },
  },
};

/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Set link url. */
  url: PropTypes.string.isRequired,
  /** Set message passed as child of `<A />` link component. */
  text: PropTypes.string.isRequired,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-ribbon-bp-visibility': PropTypes.object,
      '$rsg-ribbon-position': PropTypes.string,
      '$rsg-ribbon-top': PropTypes.string,
      '$rsg-ribbon-right': PropTypes.string,
      '$rsg-ribbon-width': PropTypes.string,
      '$rsg-ribbon-height': PropTypes.string,
      '$rsg-ribbon-z-index': PropTypes.string,
      '$rsg-ribbon-link-font-family': PropTypes.string,
      '$rsg-ribbon-link-position': PropTypes.string,
      '$rsg-ribbon-link-right': PropTypes.string,
      '$rsg-ribbon-link-top': PropTypes.string,
      '$rsg-ribbon-link-display': PropTypes.string,
      '$rsg-ribbon-link-width': PropTypes.string,
      '$rsg-ribbon-link-padding': PropTypes.string,
      '$rsg-ribbon-link-text-align': PropTypes.string,
      '$rsg-ribbon-link-color': PropTypes.string,
      '$rsg-ribbon-link-font-size': PropTypes.string,
      '$rsg-ribbon-link-background': PropTypes.string,
      '$rsg-ribbon-link-decoration': PropTypes.string,
      '$rsg-ribbon-link-shadow': PropTypes.string,
      '$rsg-ribbon-link-transform-origin': PropTypes.string,
      '$rsg-ribbon-link-transform': PropTypes.string,
      '$rsg-ribbon-link-cursor': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */

const RibbonRendererUnstyled = (props) => {
  const {
    className,
    url,
    text,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <div
      className={mapToCssModules(cn(className, 'rsg-ribbon'), cssModule)}
      {...attributes}
    >
      <A
        className="rsg-ribbon-link"
        href={url}
      >
        {text}
      </A>
    </div>
  );
};

RibbonRendererUnstyled.defaultProps = defaultProps;
RibbonRendererUnstyled.propTypes = propTypes;

const RibbonRenderer = styled(RibbonRendererUnstyled)` 
  ${(props) => `
    &.rsg-ribbon {
  ${bp.up(
    'xs',
    props.theme['$grid-breakpoints'],
    `
      visibility: ${props.theme.styleguide['$rsg-ribbon-bp-visibility'].xs};
    `
  )}
  ${bp.up(
    'md',
    props.theme['$grid-breakpoints'],
    `
      visibility: ${props.theme.styleguide['$rsg-ribbon-bp-visibility'].md};
    `
  )}
      position: ${props.theme.styleguide['$rsg-ribbon-position']};
      top: ${props.theme.styleguide['$rsg-ribbon-top']};
      right: ${props.theme.styleguide['$rsg-ribbon-right']};
      width: ${props.theme.styleguide['$rsg-ribbon-width']};
      height: ${props.theme.styleguide['$rsg-ribbon-height']};
      z-index: ${props.theme.styleguide['$rsg-ribbon-z-index']};
      .rsg-ribbon-link {
        font-family: ${props.theme.styleguide['$rsg-ribbon-link-font-family']};
        position: ${props.theme.styleguide['$rsg-ribbon-link-position']};
        right: ${props.theme.styleguide['$rsg-ribbon-link-right']};
        top: ${props.theme.styleguide['$rsg-ribbon-link-top']};
        display: ${props.theme.styleguide['$rsg-ribbon-link-display']};
        width: ${props.theme.styleguide['$rsg-ribbon-link-width']};
        padding: ${props.theme.styleguide['$rsg-ribbon-link-padding']};
        text-align: ${props.theme.styleguide['$rsg-ribbon-link-text-align']};
        color: ${props.theme.styleguide['$rsg-ribbon-link-color']};
        font-size: ${props.theme.styleguide['$rsg-ribbon-link-font-size']};
        background: ${props.theme.styleguide['$rsg-ribbon-link-background']};
        text-decoration: ${props.theme.styleguide['$rsg-ribbon-link-decoration']};
        text-shadow: ${props.theme.styleguide['$rsg-ribbon-link-shadow']};
        transform-origin: ${props.theme.styleguide['$rsg-ribbon-link-transform-origin']};
        transform: ${props.theme.styleguide['$rsg-ribbon-link-transform']};
        cursor: ${props.theme.styleguide['$rsg-ribbon-link-cursor']};
      }
    }
 `}
`;

RibbonRenderer.defaultProps = defaultProps;
RibbonRenderer.propTypes = propTypes;

export default RibbonRenderer;
