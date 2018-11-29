import React from 'react';
import PropTypes from 'prop-types';
import P from '@bootstrap-styled/v4/lib/P';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-para-margin': '0 0 8px 0',
      '$rsg-para-color': '#333',
      '$rsg-para-font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      '$rsg-para-font-size': 'inherit',
      '$rsg-para-line-height': '1.5',
    },
  },
};

/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Specified node element will be passed as children of `<ParaRenderer />` component. */
  children: PropTypes.node.isRequired,
  /** Tag used for semantic. */
  semantic: PropTypes.oneOf(['p']),
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-para-margin': PropTypes.string,
      '$rsg-para-color': PropTypes.string,
      '$rsg-para-font-family': PropTypes.string,
      '$rsg-para-font-size': PropTypes.string,
      '$rsg-para-line-height': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */

const ParaRendererUnstyled = (props) => {
  const {
    className,
    children,
    semantic,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);
  const Tag = (semantic && P) || 'div';

  return (
    <Tag
      className={mapToCssModules(cn(className, 'rsg-para'), cssModule)}
      {...attributes}
    >
      {children}
    </Tag>
  );
};

ParaRendererUnstyled.defaultProps = defaultProps;
ParaRendererUnstyled.propTypes = propTypes;

const ParaRenderer = styled(ParaRendererUnstyled)` 
  ${(props) => `
    &.rsg-para {
      margin: ${props.theme.styleguide['$rsg-para-margin']};
      color: ${props.theme.styleguide['$rsg-para-color']};
      font-family: ${props.theme.styleguide['$rsg-para-font-family']};
      font-size: ${props.theme.styleguide['$rsg-para-font-size']};
      line-height: ${props.theme.styleguide['$rsg-para-line-height']};
    }
 `}
`;

export default ParaRenderer;
