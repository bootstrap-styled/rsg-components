/* eslint-disable */
/**
 * Testing our TabButtonRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import TabButtonRenderer from '../TabButtonRenderer';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <TabButtonRenderer {...props}>
    {children}
  </TabButtonRenderer>
);

describe('<TabButtonRenderer />', () => {
  it('should render an TabButtonRenderer with children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
