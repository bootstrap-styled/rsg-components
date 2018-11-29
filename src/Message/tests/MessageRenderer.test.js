/* eslint-disable */
/**
 * Testing our MessageRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import MessageRenderer from '../MessageRenderer';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <MessageRenderer {...props}>
    {children}
  </MessageRenderer>
);

describe('<MessageRenderer />', () => {
  it('should render an MessageRenderer with children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
