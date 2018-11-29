/* eslint-disable */
/**
 * Testing our ToolbarButtonRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import ToolbarButtonRenderer from '../ToolbarButtonRenderer';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <ToolbarButtonRenderer {...props}>
    {children}
  </ToolbarButtonRenderer>
);

describe('<ToolbarButtonRenderer />', () => {
  it('should render an ToolbarButtonRenderer with children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
