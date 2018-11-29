/* eslint-disable */
/**
 * Testing our TableCellRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import TableCellRenderer from '../TableCellRenderer';

const children = <h1>Test children</h1>;

const renderComponent = (props = {}) => shallow(
  <TableCellRenderer {...props}>
    {children}
  </TableCellRenderer>
);

describe('<TableCellRenderer />', () => {
  it('should render an TableCellRenderer', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.length).toBe(1);
  });
});
