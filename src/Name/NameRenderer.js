import React from 'react';
import PropTypes from 'prop-types';
import Code from '@bootstrap-styled/v4/lib/Code';
import bp from '@bootstrap-styled/css-mixins/lib/breakpoints';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';


export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-name-word-wrap': 'break-word',
      '$rsg-name-font-size': {
        xs: '12px',
        sm: '15px',
      },
      '$rsg-name-color': '#b11255',
      '$rsg-name-deprecated-color': '#f47469',
      '$rsg-name-deprecated-decoration': 'line-through',
    },
  },
};

/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Specified node element will be passed as children of `<NameRenderer />` component. */
  children: PropTypes.node.isRequired,
  /** Toggle deprecated style. */
  deprecated: PropTypes.bool, // eslint-disable-line react/require-default-props
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-name-word-wrap': PropTypes.string,
      '$rsg-name-font-size': PropTypes.shape({
        xs: PropTypes.string,
        sm: PropTypes.string,
      }),
      '$rsg-name-color': PropTypes.string,
      '$rsg-name-deprecated-color': PropTypes.string,
      '$rsg-name-deprecated-decoration': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */


const NameRendererUnstyled = (props) => {
  const {
    className,
    children,
    deprecated,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);
  return (
    <span
      className={mapToCssModules(cn(className, 'rsg-name'), cssModule)}
      {...attributes}
    >
      <Code className={`name-renderer-code ${deprecated ? 'deprecated' : ''}`}>{children}</Code>
    </span>
  );
};

NameRendererUnstyled.defaultProps = defaultProps;
NameRendererUnstyled.propTypes = propTypes;

const NameRenderer = styled(NameRendererUnstyled)` 
  ${(props) => `
    &.rsg-name {
      .name-renderer-code {
        word-wrap: ${props.theme.styleguide['$rsg-name-word-wrap']};
  ${bp.up(
    'xs',
    props.theme['$grid-breakpoints'],
    `
      font-size: ${props.theme.styleguide['$rsg-name-font-size'].xs};
    `
  )}
  ${bp.up(
    'sm',
    props.theme['$grid-breakpoints'],
    `
     font-size: ${props.theme.styleguide['$rsg-name-font-size'].sm};
    `
  )}
        color: ${props.theme.styleguide['$rsg-name-color']};
      }
      .name-renderer-code.deprecated {
        color: ${props.theme.styleguide['$rsg-name-deprecated-color']};
        text-decoration: ${props.theme.styleguide['$rsg-name-deprecated-decoration']};
      }
    }
 `}
`;

NameRenderer.defaultProps = defaultProps;
NameRenderer.propTypes = propTypes;

export default NameRenderer;
