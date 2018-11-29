/* eslint-disable */
/**
 * Testing our BlockquoteRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import BlockquoteRenderer from '../BlockquoteRenderer';

const children = <h1>Test children</h1>;

const renderComponent = (props = {}) => shallow(
  <BlockquoteRenderer {...props}>
    {children}
  </BlockquoteRenderer>
);

describe('<BlockquoteRenderer />', () => {
  it('should render an BlockquoteRenderer', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.length).toBe(1);
  });
});
