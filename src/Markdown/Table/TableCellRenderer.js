import React from 'react';
import PropTypes from 'prop-types';
import Th from '@bootstrap-styled/v4/lib/Table/Th';
import Td from '@bootstrap-styled/v4/lib/Table/Td';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';


export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-markdown-table-cell-padding': '4px 16px 4px 0',
      '$rsg-markdown-table-cell-font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      '$rsg-markdown-table-cell-font-size': '15px',
      '$rsg-markdown-table-cell-color': '#292b2c',
      '$rsg-markdown-table-cell-line-height': '1.5',
      '$rsg-markdown-table-cell-head-font-weight': 'bold',

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
  header: PropTypes.bool,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-markdown-table-cell-padding': PropTypes.string,
      '$rsg-markdown-table-cell-font-family': PropTypes.string,
      '$rsg-markdown-table-cell-font-size': PropTypes.string,
      '$rsg-markdown-table-cell-color': PropTypes.string,
      '$rsg-markdown-table-cell-line-height': PropTypes.string,
      '$rsg-markdown-table-cell-head-font-weight': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */


const TableCellRendererUnstyled = (props) => {
  const {
    className,
    header,
    children,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  if (header) {
    return (
      <Th
        className={mapToCssModules(cn(className, 'rsg-markdown-table-cell-head'), cssModule)}
        {...attributes}
      >
        {children}
      </Th>
    );
  }

  return (
    <Td
      className={mapToCssModules(cn(className, 'rsg-markdown-table-cell'), cssModule)}
      {...attributes}
    >
      {children}
    </Td>
  );
};

TableCellRendererUnstyled.defaultProps = defaultProps;
TableCellRendererUnstyled.propTypes = propTypes;

const TableCellRenderer = styled(TableCellRendererUnstyled)` 
  ${(props) => `
    &.rsg-markdown-table-cell {
      padding: ${props.theme.styleguide['$rsg-markdown-table-cell-padding']};
      font-family: ${props.theme.styleguide['$rsg-markdown-table-cell-font-family']};
      font-size: ${props.theme.styleguide['$rsg-markdown-table-cell-font-size']};
      color: ${props.theme.styleguide['$rsg-markdown-table-cell-color']};
      line-height: ${props.theme.styleguide['$rsg-markdown-table-cell-line-height']};
    }
    &.rsg-markdown-table-cell-head {
      font-weight: ${props.theme.styleguide['$rsg-markdown-table-cell-head-font-weight']};
    }
 `}
`;

TableCellRenderer.defaultProps = defaultProps;
TableCellRenderer.propTypes = propTypes;

export default TableCellRenderer;
