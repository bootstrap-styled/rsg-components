/* eslint-disable */
/**
 * Testing our TableRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import TableRenderer from '../TableRenderer';

const children = <h1>Test children</h1>;

const renderComponent = (props = {}) => shallow(
  <TableRenderer {...props}>
    {children}
  </TableRenderer>
);

describe('<TableRenderer />', () => {
  it('should render an TableRenderer', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.length).toBe(1);
  });
});
