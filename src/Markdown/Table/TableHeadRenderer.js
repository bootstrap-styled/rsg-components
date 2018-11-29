import React from 'react';
import PropTypes from 'prop-types';
import Thead from '@bootstrap-styled/v4/lib/Table/Thead';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';


export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-markdown-table-head-border-bottom': '1 #CCCCCC solid',
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
      '$rsg-markdown-table-head-border-bottom': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */


const TableHeadRendererUnstyled = (props) => {
  const {
    className,
    children,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <Thead
      className={mapToCssModules(cn(className, 'rsg-markdown-table-head'), cssModule)}
      {...attributes}
    >
      {children}
    </Thead>
  );
};

TableHeadRendererUnstyled.defaultProps = defaultProps;
TableHeadRendererUnstyled.propTypes = propTypes;

const TableHeadRenderer = styled(TableHeadRendererUnstyled)` 
  ${(props) => `
    &.rsg-markdown-table-head {
      border-bottom: ${props.theme.styleguide['$rsg-markdown-table-head-border-bottom']};
    }
 `}
`;

TableHeadRenderer.defaultProps = defaultProps;
TableHeadRenderer.propTypes = propTypes;

export default TableHeadRenderer;
