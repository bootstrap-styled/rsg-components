/* eslint-disable */
/**
 * Testing our PlaygroundErrorRenderer component
 */
import { mount } from 'enzyme';
import React from 'react';
import PlaygroundErrorRenderer from '../PlaygroundErrorRenderer';

const renderComponent = (props = {}) => mount(
  <PlaygroundErrorRenderer {...props} />
);

describe('<PlaygroundErrorRenderer />', () => {
  let message;
  beforeAll(() => {
    message = 'Test message';
  });
  it('should render an PlaygroundErrorRenderer with pre tag and children equal to Test message', () => {
    const renderedComponent = renderComponent({
      message,
    });
    expect(renderedComponent.find('pre').props().children).toEqual('Test message');
  });
});
