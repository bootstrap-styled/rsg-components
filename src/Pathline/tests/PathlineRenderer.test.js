/* eslint-disable */
/**
 * Testing our PathlineRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import PathlineRenderer from '../PathlineRenderer';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <PathlineRenderer {...props}>
    {children}
  </PathlineRenderer>
);

describe('<PathlineRenderer />', () => {
  it('should render an PathlineRenderer with children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
