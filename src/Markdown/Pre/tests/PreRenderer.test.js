/* eslint-disable */
/**
 * Testing our PreRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import PreRenderer from '../PreRenderer';

const children = <h1>Test children</h1>;

const renderComponent = (props = {}) => shallow(
  <PreRenderer {...props}>
    {children}
  </PreRenderer>
);

describe('<PreRenderer />', () => {
  it('should render an PreRenderer', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.length).toBe(1);
  });
});
