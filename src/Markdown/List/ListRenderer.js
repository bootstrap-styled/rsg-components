import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import Ol from '@bootstrap-styled/v4/lib/Ol';
import Ul from '@bootstrap-styled/v4/lib/Ul';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';

export const defaultProps = {
  ordered: false,
  theme: {
    styleguide: {
      '$rsg-markdown-list-margin': '0 0 16px 0',
      '$rsg-markdown-list-padding': '0 0 0 24px',
      '$rsg-markdown-list-font-size': 'inherit',
      '$rsg-markdown-list-ordered-style-type': 'decimal',
      '$rsg-markdown-list-li-color': '#333',
      '$rsg-markdown-list-li-font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      '$rsg-markdown-list-li-font-size': 'inherit',
      '$rsg-markdown-list-li-line-height': '1.5',
      '$rsg-markdown-list-li-style-type': 'inherit',
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
  ordered: PropTypes.bool,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-markdown-list-margin': PropTypes.string,
      '$rsg-markdown-list-padding': PropTypes.string,
      '$rsg-markdown-list-font-size': PropTypes.string,
      '$rsg-markdown-list-ordered-style-type': PropTypes.string,
      '$rsg-markdown-list-li-color': PropTypes.string,
      '$rsg-markdown-list-li-font-family': PropTypes.string,
      '$rsg-markdown-list-li-font-size': PropTypes.string,
      '$rsg-markdown-list-li-line-height': PropTypes.string,
      '$rsg-markdown-list-li-style-type': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */

const ListRendererUnstyled = (props) => { // eslint-disable-next-line no-shadow
  const {
    className,
    children,
    ordered,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  const Tag = ordered ? Ol : Ul;

  return (
    <Tag
      className={mapToCssModules(cn(className, 'rsg-markdown-list', `list-${ordered ? 'ol' : 'ul'}`), cssModule)}
      {...attributes}
    >
      {Children.map(children, (Li) => cloneElement(Li))}
    </Tag>
  );
};

ListRendererUnstyled.defaultProps = defaultProps;
ListRendererUnstyled.propTypes = propTypes;

const ListRenderer = styled(ListRendererUnstyled)` 
  ${(props) => `
    &.rsg-markdown-list {
      font-size: ${props.theme.styleguide['$rsg-markdown-list-font-size']};
      margin: ${props.theme.styleguide['$rsg-markdown-list-margin']};
      padding: ${props.theme.styleguide['$rsg-markdown-list-padding']};
    }
    &.rsg-markdown-list.list-ol {
      list-style-type: ${props.theme.styleguide['$rsg-markdown-list-ordered-style-type']} ;
    }
    &.rsg-markdown-list.list-ul {
      font-family: ${props.theme.styleguide['$rsg-markdown-list-li-font-family']} ;
      font-size: ${props.theme.styleguide['$rsg-markdown-list-li-font-size']} !important;
      color: ${props.theme.styleguide['$rsg-markdown-list-li-color']} !important;
      line-height: ${props.theme.styleguide['$rsg-markdown-list-li-line-height']} ;
      list-style-type: ${props.theme.styleguide['$rsg-markdown-list-li-style-type']} ;
    }
 `}
`;

ListRenderer.defaultProps = defaultProps;
ListRenderer.propTypes = propTypes;

export default ListRenderer;
