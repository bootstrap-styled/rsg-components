import React from 'react';
import PropTypes from 'prop-types';
import Blockquote from '@bootstrap-styled/v4/lib/Blockquote';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';
export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-markdown-block-quote-margin': '16px 32px',
      '$rsg-markdown-block-quote-padding': '0',
      '$rsg-markdown-block-quote-color': '#333',
      '$rsg-markdown-block-quote-font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      '$rsg-markdown-block-quote-font-size': '15px',
      '$rsg-markdown-block-quote-line-height': '1.5',
      '$rsg-markdown-block-quote-border': 'none',
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
      '$rsg-markdown-block-quote-margin': PropTypes.string,
      '$rsg-markdown-block-quote-padding': PropTypes.string,
      '$rsg-markdown-block-quote-color': PropTypes.string,
      '$rsg-markdown-block-quote-font-family': PropTypes.string,
      '$rsg-markdown-block-quote-font-size': PropTypes.string,
      '$rsg-markdown-block-quote-line-height': PropTypes.string,
      '$rsg-markdown-block-quote-border': PropTypes.string,
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
      margin: ${props.theme.styleguide['$rsg-markdown-block-quote-margin']};
      padding: ${props.theme.styleguide['$rsg-markdown-block-quote-padding']};
      color: ${props.theme.styleguide['$rsg-markdown-block-quote-color']};
      font-family: ${props.theme.styleguide['$rsg-markdown-block-quote-font-family']};
      font-size: ${props.theme.styleguide['$rsg-markdown-block-quote-font-size']};
      line-height: ${props.theme.styleguide['$rsg-markdown-block-quote-line-height']};
      border: ${props.theme.styleguide['$rsg-markdown-block-quote-border']};
    }
 `}
`;

BlockquoteRsg.defaultProps = defaultProps;
BlockquoteRsg.propTypes = propTypes;

export default BlockquoteRsg;
