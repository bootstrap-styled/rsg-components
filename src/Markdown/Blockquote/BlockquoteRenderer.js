import React from 'react';
import PropTypes from 'prop-types';
import Blockquote from '@bootstrap-styled/v4/lib/Blockquote';
import { borderRadius } from '@bootstrap-styled/css-mixins/lib/border-radius';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';
import Color from '@bootstrap-styled/color';
export const defaultProps = {
  theme: {
    '$enable-rounded': true,
    '$brand-parimary': 'blue',
    styleguide: {
      '$rsg-markdown-block-quote-color': '#333',
      '$rsg-markdown-block-quote-font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      '$rsg-markdown-block-quote-line-height': '1.5',
      '$rsg-markdown-block-quote-border-radius': '5px',
      '$rsg-markdown-block-quote-border-width': '1px',
      '$rsg-markdown-block-quote-border-left-width': 'px',
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
    '$enable-rounded': PropTypes.bool,
    '$brand-primary': PropTypes.string,
    styleguide: PropTypes.shape({
      '$rsg-markdown-block-quote-color': PropTypes.string,
      '$rsg-markdown-block-quote-font-family': PropTypes.string,
      '$rsg-markdown-block-quote-line-height': PropTypes.string,
      '$rsg-markdown-block-quote-border-radius': PropTypes.string,
      '$rsg-markdown-block-quote-border-width': PropTypes.string,
      '$rsg-markdown-block-quote-border-left-width': PropTypes.string,

    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */

const BlockquoteUnstyled = (props) => {
  const {
    className,
    children,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <Blockquote
      className={mapToCssModules(cn(className, 'rsg-markdown-blockquote'), cssModule)}
      {...attributes}
    >
      {children}
    </Blockquote>
  );
};

BlockquoteUnstyled.defaultProps = defaultProps;
BlockquoteUnstyled.propTypes = propTypes;

const BlockquoteRsg = styled(BlockquoteUnstyled)` 
  ${(props) => `
    &.rsg-markdown-blockquote {
      color: ${props.theme.styleguide['$rsg-markdown-block-quote-color']};
      font-family: ${props.theme.styleguide['$rsg-markdown-block-quote-font-family']};
      line-height: ${props.theme.styleguide['$rsg-markdown-block-quote-line-height']};
      border: ${props.theme.styleguide['$rsg-markdown-block-quote-border-width']} solid ${props.theme['$brand-primary']};
      border-left: ${props.theme.styleguide['$rsg-markdown-block-quote-border-left-width']} solid ${props.theme['$brand-primary']};
      ${borderRadius(props.theme['$enable-rounded'], props.theme.styleguide['$rsg-markdown-block-quote-border-radius'])}
      background-color: ${Color(props.theme['$brand-primary']).fade(0.9).toString()};
    }
 `}
`;

BlockquoteRsg.defaultProps = defaultProps;
BlockquoteRsg.propTypes = propTypes;

export default BlockquoteRsg;
