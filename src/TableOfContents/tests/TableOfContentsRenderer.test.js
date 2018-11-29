/* eslint-disable */
/**
 * Testing our TableOfContentsRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import TableOfContentsRenderer from '../TableOfContentsRenderer';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <TableOfContentsRenderer {...props}>
    {children}
  </TableOfContentsRenderer>
);

describe('<TableOfContentsRenderer />', () => {
  let searchTerm;
  let onSearchTermChange;
  beforeAll(() => {
    searchTerm = 'search term';
    onSearchTermChange = jest.fn();
  });
  it('should render an TableOfContentsRenderer with children', () => {
    const renderedComponent = renderComponent({
      searchTerm,
      onSearchTermChange: () => {},
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
