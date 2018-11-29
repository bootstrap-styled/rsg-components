/* eslint-disable */
/**
 * Testing our HrRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import HrRenderer from '../HrRenderer';

const renderComponent = (props = {}) => shallow(
  <HrRenderer {...props} />
);

describe('<HrRenderer />', () => {
  it('should render an HrRenderer', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.length).toBe(1);
  });
});
