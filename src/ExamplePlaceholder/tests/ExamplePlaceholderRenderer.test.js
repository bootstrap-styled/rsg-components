/* eslint-disable */
/**
 * Testing our ExamplePlaceholderRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import ExamplePlaceholderRenderer from '../ExamplePlaceholderRenderer';

const renderComponent = (props = {}) => shallow(
  <ExamplePlaceholderRenderer {...props} />
);

describe('<ExamplePlaceholderRenderer />', () => {
  it('should render an ExamplePlaceholderRenderer', () => {
    const renderedComponent = renderComponent({
      name: 'test name',
    });
    expect(renderedComponent.length).toBe(1);
  });
});
