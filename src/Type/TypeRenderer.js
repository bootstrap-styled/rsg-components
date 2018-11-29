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
      '$rsg-type-font-size': {
        xs: '12px',
        sm: '15px',
      },
      '$rsg-type-color': '#75096a',
    },
  },
};

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Specified node element will be passed as children of `<TypeRenderer />` component. */
  children: PropTypes.node.isRequired,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-type-font-size': PropTypes.shape({
        xs: PropTypes.string,
        sm: PropTypes.string,
      }),
      '$rsg-type-color': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};

const TypeRendererUnstyled = (props) => {
  const {
    className,
    children,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <span
      className={mapToCssModules(cn(className, 'rsg-type'), cssModule)}
      {...attributes}
    >
      <Code className="type-renderer-code">{children}</Code>
    </span>
  );
};

TypeRendererUnstyled.defaultProps = defaultProps;
TypeRendererUnstyled.propTypes = propTypes;

const TypeRenderer = styled(TypeRendererUnstyled)` 
  ${(props) => `
    &.rsg-type {
      .type-renderer-code {
  ${bp.up(
    'xs',
    props.theme['$grid-breakpoints'],
    `
      font-size: ${props.theme.styleguide['$rsg-type-font-size'].xs} !important;
    `
  )}
  ${bp.up(
    'sm',
    props.theme['$grid-breakpoints'],
    `
     font-size: ${props.theme.styleguide['$rsg-type-font-size'].sm} !important;
    `
  )}
        color: ${props.theme.styleguide['$rsg-type-color']} !important;
      }
    }
 `}
`;

TypeRenderer.defaultProps = defaultProps;
TypeRenderer.propTypes = propTypes;

export default TypeRenderer;
