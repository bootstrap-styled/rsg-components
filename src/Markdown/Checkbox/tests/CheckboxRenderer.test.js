/* eslint-disable */
/**
 * Testing our CheckboxRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import CheckboxRenderer from '../CheckboxRenderer';

const renderComponent = (props = {}) => shallow(
  <CheckboxRenderer {...props} />
);

describe('<CheckboxRenderer />', () => {
  it('should render an CheckboxRenderer', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.length).toBe(1);
  });
});
