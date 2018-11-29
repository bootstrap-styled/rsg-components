/* eslint-disable */
/**
 * Testing our TableBodyRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import TableBodyRenderer from '../TableBodyRenderer';

const children = <h1>Test children</h1>;

const renderComponent = (props = {}) => shallow(
  <TableBodyRenderer {...props}>
    {children}
  </TableBodyRenderer>
);

describe('<TableBodyRenderer />', () => {
  it('should render an TableBodyRenderer', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.length).toBe(1);
  });
});
