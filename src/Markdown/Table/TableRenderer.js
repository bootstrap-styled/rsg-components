import React from 'react';
import PropTypes from 'prop-types';
import Table from '@bootstrap-styled/v4/lib/Table';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';


export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-markdown-table-margin': '0 0 8px 0',
      '$rsg-markdown-border-collapse': 'collapse',

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
      '$rsg-markdown-table-margin': PropTypes.string,
      '$rsg-markdown-border-collapse': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */


const TableRendererUnstyled = (props) => {
  const {
    className,
    children,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <Table
      className={mapToCssModules(cn(className, 'rsg-markdown-table'), cssModule)}
      {...attributes}
    >
      {children}
    </Table>
  );
};

TableRendererUnstyled.defaultProps = defaultProps;
TableRendererUnstyled.propTypes = propTypes;

const TableRenderer = styled(TableRendererUnstyled)` 
  ${(props) => `
    &.rsg-markdown-table {
      margin: ${props.theme.styleguide['$rsg-markdown-table-margin']};
      border-collapse: ${props.theme.styleguide['$rsg-markdown-table-border-collapse']};
    }
 `}
`;

TableRenderer.defaultProps = defaultProps;
TableRenderer.propTypes = propTypes;

export default TableRenderer;
