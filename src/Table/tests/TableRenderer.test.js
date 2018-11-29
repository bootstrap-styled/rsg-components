/* eslint-disable */
/**
 * Testing our TableRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import TableRenderer from '../TableRenderer';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <TableRenderer {...props}>
    {children}
  </TableRenderer>
);

describe('<TableRenderer />', () => {
  let columns;
  let rows;
  let getRowKey;
  beforeAll(() => {
    columns = [{ caption: 'caption', render: () => {} }];
    rows = [{}];
    getRowKey = jest.fn();
  });

  it('should render an TableRenderer with children', () => {
    const renderedComponent = renderComponent({
      columns,
      rows,
      getRowKey: () => {},
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
