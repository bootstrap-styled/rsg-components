import React from 'react';
import PropTypes from 'prop-types';
import Table from '@bootstrap-styled/v4/lib/Table';
import Thead from '@bootstrap-styled/v4/lib/Table/Thead';
import Tr from '@bootstrap-styled/v4/lib/Table/Tr';
import Th from '@bootstrap-styled/v4/lib/Table/Th';
import Tbody from '@bootstrap-styled/v4/lib/Table/Tbody';
import Td from '@bootstrap-styled/v4/lib/Table/Td';
import Strong from '@bootstrap-styled/v4/lib/Strong';
import bp from '@bootstrap-styled/css-mixins/lib/breakpoints';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-table-border': 'none',
      '$rsg-table-layout': {
        xs: 'fixed',
        md: 'fixed',
        xxl: 'auto',
      },
      '$rsg-table-width': {
        xs: '100%',
        md: 'fixed',
        xxl: '1000px',
      },
      '$rsg-table-th-width': {
        xs: '21.6666666667%;',
        md: '18.3333333333%',
        xxl: '81.48148148px',
      },
      '$rsg-table-th-last-width': {
        xs: '35%',
        md: '45%',
        xxl: '200px',
      },
      '$rsg-table-td-width': {
        xs: '21.6666666667%',
        md: '18.3333333333%',
        xxl: '81.48148148px',
      },
      '$rsg-table-td-last-width': {
        xs: '35%',
        md: '45%',
        xxl: '200px',
      },
      '$rsg-table-cell-heading-vertical-align': 'text-top',
      '$rsg-table-cell-heading-first-child-white-space': 'pre-wrap',
      '$rsg-table-cell-heading-font-size': {
        xs: '12px',
        sm: '15px',
      },
      '$rsg-table-cell-padding': '5px 5px 7px 0',
      '$rsg-table-cell-font-size': {
        xs: '12px',
        sm: '15px',
      },
      '$rsg-table-cell-span-font-size': {
        xs: '12px',
        sm: '15px',
      },
      '$rsg-table-overflow': 'auto',
      '$rsg-table-border-collapse': 'collapse',
      '$rsg-table-margin': '24px 0 0 0',
      '$rsg-table-head-border-bottom': '1px #e8e8e8 solid',
      '$rsg-table-cell-heading-color': '#333',
      '$rsg-table-cell-heading-padding': '0 8px 4px 0',
      '$rsg-table-cell-heading-text-align': 'left',
      '$rsg-table-cell-heading-font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      '$rsg-table-cell-heading-font-weight': 'bold',
      '$rsg-table-cell-heading-white-space': 'nowrap',
      '$rsg-table-cell-border-top': '0',
      '$rsg-table-cell-color': '#333',
      '$rsg-table-cell-vertical-align': 'top',
      '$rsg-table-cell-font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      '$rsg-table-cell-child-isolation': 'false',
      '$rsg-table-cell-child-p-isolation': 'false',
      '$rsg-table-cell-child-p-margin': '0 0 0 0',
    },
  },
};

/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Columns to be rendered. */
  columns: PropTypes.arrayOf(PropTypes.shape({
    caption: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired,
  })).isRequired,
  /** Rows to be rendered. */
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  /** Set function passed to `<Tr />` component. */
  getRowKey: PropTypes.func.isRequired,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-table-border': PropTypes.string,
      '$rsg-table-layout': PropTypes.shape({
        xs: PropTypes.string,
        md: PropTypes.string,
        xxl: PropTypes.string,
      }),
      '$rsg-table-width': PropTypes.shape({
        xs: PropTypes.string,
        md: PropTypes.string,
        xxl: PropTypes.string,
      }),
      '$rsg-table-th-width': PropTypes.shape({
        xs: PropTypes.string,
        md: PropTypes.string,
        xxl: PropTypes.string,
      }),
      '$rsg-table-th-last-width': PropTypes.shape({
        xs: PropTypes.string,
        md: PropTypes.string,
        xxl: PropTypes.string,
      }),
      '$rsg-table-td-width': PropTypes.shape({
        xs: PropTypes.string,
        md: PropTypes.string,
        xxl: PropTypes.string,
      }),
      '$rsg-table-td-last-width': PropTypes.shape({
        xs: PropTypes.string,
        md: PropTypes.string,
        xxl: PropTypes.string,
      }),
      '$rsg-table-cell-heading-vertical-align': PropTypes.string,
      '$rsg-table-cell-heading-first-child-white-space': PropTypes.string,
      '$rsg-table-cell-heading-font-size': PropTypes.shape({
        xs: PropTypes.string,
        sm: PropTypes.string,
      }),
      '$rsg-table-cell-padding': PropTypes.string,
      '$rsg-table-cell-font-size': PropTypes.shape({
        xs: PropTypes.string,
        sm: PropTypes.string,
      }),
      '$rsg-table-cell-span-font-size': PropTypes.shape({
        xs: PropTypes.string,
        sm: PropTypes.string,
      }),
      '$rsg-table-overflow': PropTypes.string,
      '$rsg-table-border-collapse': PropTypes.string,
      '$rsg-table-margin': PropTypes.string,
      '$rsg-table-head-border-bottom': PropTypes.string,
      '$rsg-table-cell-heading-color': PropTypes.string,
      '$rsg-table-cell-heading-padding': PropTypes.string,
      '$rsg-table-cell-heading-text-align': PropTypes.string,
      '$rsg-table-cell-heading-font-family': PropTypes.string,
      '$rsg-table-cell-heading-font-weight': PropTypes.string,
      '$rsg-table-cell-heading-white-space': PropTypes.string,
      '$rsg-table-cell-border-top': PropTypes.string,
      '$rsg-table-cell-color': PropTypes.string,
      '$rsg-table-cell-vertical-align': PropTypes.string,
      '$rsg-table-cell-font-family': PropTypes.string,
      '$rsg-table-cell-child-isolation': PropTypes.string,
      '$rsg-table-cell-child-p-isolation': PropTypes.string,
      '$rsg-table-cell-child-p-margin': PropTypes.string,
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
    columns,
    rows,
    getRowKey,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);
  /* eslint-disable react/no-array-index-key */
  return (
    <Table
      className={mapToCssModules(cn(className, 'rsg-table'), cssModule)}
      {...attributes}
    >
      <Thead className="rsg-table-head">
        <Tr className="rsg-table-row">
          {columns.map(({ caption }) => (
            <Th key={caption} className="rsg-table-cell-heading">
              <Strong className="rsg-table-cell-heading-content">{caption}</Strong>
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody className="rsg-table-body">
        {rows.map((row) => (
          <Tr key={getRowKey(row)} className="rsg-table-row">
            {columns.map(({ render }, index) => (
              <Td key={`rsg-table-cell-${index}`} className="rsg-table-cell">
                {render(row)}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
  /* eslint-enable react/no-array-index-key */
};

TableRendererUnstyled.defaultProps = defaultProps;
TableRendererUnstyled.propTypes = propTypes;


const TableRenderer = styled(TableRendererUnstyled)`
  ${(props) => `
    &.rsg-table {
      border: ${props.theme.styleguide['$rsg-table-border']};
  ${bp.up(
    'xs',
    props.theme['$grid-breakpoints'],
    `
      table-layout: ${props.theme.styleguide['$rsg-table-layout'].xs};
      width: ${props.theme.styleguide['$rsg-table-width'].xs};
    `
  )}
  ${bp.up(
    'xxl',
    { xxl: '1500px' },
    `
      table-layout:  ${props.theme.styleguide['$rsg-table-layout'].xxl};
      width: ${props.theme.styleguide['$rsg-table-width'].xxl};
    `
  )}
      overflow: ${props.theme.styleguide['$rsg-table-overflow']};
      border-collapse: ${props.theme.styleguide['$rsg-table-border-collapse']} !important;
      margin: ${props.theme.styleguide['$rsg-table-margin']};
  ${bp.up(
    'xs',
    props.theme['$grid-breakpoints'],
    `
      thead tr th:not(:last-child) {
        width: ${props.theme.styleguide['$rsg-table-th-width'].xs};
      }
      thead tr th:last-child {
        width: ${props.theme.styleguide['$rsg-table-th-last-width'].xs};
      }
      tbody tr td:not(:last-child) {
        width: ${props.theme.styleguide['$rsg-table-td-width'].xs};
      }
      tbody tr td:last-child {
        width: ${props.theme.styleguide['$rsg-table-td-last-width'].xs};
      }
    `
  )}
  ${bp.up(
    'md',
    props.theme['$grid-breakpoints'],
    `
      thead tr th:not(:last-child) {
        width: ${props.theme.styleguide['$rsg-table-th-width'].md};
      }
      thead tr th:last-child {
        width: ${props.theme.styleguide['$rsg-table-th-last-width'].md};
      }
      tbody tr td:not(:last-child) {
        width: ${props.theme.styleguide['$rsg-table-td-width'].md};
      }
      tbody tr td:last-child {
        width: ${props.theme.styleguide['$rsg-table-td-last-width'].md};
      }
    `
  )}
  ${bp.up(
    'xxl',
    { xxl: '1500px' },
    `
      thead tr th:not(:last-child) {
        width: ${props.theme.styleguide['$rsg-table-th-width'].xxl};
      }
      thead tr th:last-child {
        width: ${props.theme.styleguide['$rsg-table-th-last-width'].xxl};
      }
      tbody tr td:not(:last-child) {
        width: ${props.theme.styleguide['$rsg-table-td-width'].xxl};
      }
      tbody tr td:last-child {
        width: ${props.theme.styleguide['$rsg-table-td-last-width'].xxl};
      }
    `
  )}
      .rsg-table-head {
        border-bottom: ${props.theme.styleguide['$rsg-table-head-border-bottom']};
        & .rsg-table-cell-heading {
          padding: ${props.theme.styleguide['$rsg-table-cell-heading-padding']};
          color: ${props.theme.styleguide['$rsg-table-cell-heading-color']};
          text-align: ${props.theme.styleguide['$rsg-table-cell-heading-text-align']};
          font-weight: ${props.theme.styleguide['$rsg-table-cell-heading-font-weight']};
          font-family: ${props.theme.styleguide['$rsg-table-cell-heading-font-family']};
  ${bp.up(
    'xs',
    props.theme['$grid-breakpoints'],
    `
      font-size: ${props.theme.styleguide['$rsg-table-cell-heading-font-size'].xs};
    `
  )}
  ${bp.up(
    'sm',
    props.theme['$grid-breakpoints'],
    `
     font-size: ${props.theme.styleguide['$rsg-table-cell-heading-font-size'].xs};
    `
  )}
          white-space: ${props.theme.styleguide['$rsg-table-cell-heading-white-space']};
          vertical-align: ${props.theme.styleguide['$rsg-table-cell-heading-vertical-align']};
          &:first-child {
            white-space: ${props.theme.styleguide['$rsg-table-cell-heading-first-child-white-space']};
          }
        }
      }
      & .rsg-table-cell {
        padding: ${props.theme.styleguide['$rsg-table-cell-padding']};
        border-top: ${props.theme.styleguide['$rsg-table-cell-border-top']};
        color: ${props.theme.styleguide['$rsg-table-cell-color']};
        vertical-align: ${props.theme.styleguide['$rsg-table-cell-vertical-align']};
        font-family: ${props.theme.styleguide['$rsg-table-cell-font-family']};
  ${bp.up(
    'xs',
    props.theme['$grid-breakpoints'],
    `
     font-size: ${props.theme.styleguide['$rsg-table-cell-font-size'].xs};

    `
  )}
  ${bp.up(
    'sm',
    props.theme['$grid-breakpoints'],
    `
     font-size: ${props.theme.styleguide['$rsg-table-cell-font-size'].sm};

    `
  )}
        & span {
  ${bp.up(
    'xs',
    props.theme['$grid-breakpoints'],
    `
     font-size: ${props.theme.styleguide['$rsg-table-cell-span-font-size'].xs};

    `
  )}
  ${bp.up(
    'sm',
    props.theme['$grid-breakpoints'],
    `
     font-size: ${props.theme.styleguide['$rsg-table-cell-span-font-size'].sm};

    `
  )}
        }
        &:last-child {
          isolation: ${props.theme.styleguide['$rsg-table-cell-child-isolation']};
        }
        & p:last-child {
          isolation: ${props.theme.styleguide['$rsg-table-cell-child-p-isolation']} !important;
          margin: ${props.theme.styleguide['$rsg-table-cell-child-p-margin']};
        }
      }
    }
 `}
`;

TableRenderer.defaultProps = defaultProps;
TableRenderer.propTypes = propTypes;

export default TableRenderer;
