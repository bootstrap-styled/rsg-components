/* eslint-disable */
/**
 * Testing our TableRowRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import TableRowRenderer from '../TableRowRenderer';

const children = <h1>Test children</h1>;

const renderComponent = (props = {}) => shallow(
  <TableRowRenderer {...props}>
    {children}
  </TableRowRenderer>
);

describe('<TableRowRenderer />', () => {
  it('should render an TableRowRenderer', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.length).toBe(1);
  });
});
