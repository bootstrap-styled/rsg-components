/* eslint-disable */
/**
 * Testing our TableHeadRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import TableHeadRenderer from '../TableHeadRenderer';

const children = <h1>Test children</h1>;

const renderComponent = (props = {}) => shallow(
  <TableHeadRenderer {...props}>
    {children}
  </TableHeadRenderer>
);

describe('<TableHeadRenderer />', () => {
  it('should render an TableHeadRenderer', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.length).toBe(1);
  });
});
