/* eslint-disable */
/**
 * Testing our FooterRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import FooterRenderer from '../FooterRenderer';

const renderComponent = (props = {}) => shallow(
  <FooterRenderer {...props} />
);

describe('<FooterRenderer />', () => {
  it('should render an FooterRenderer', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.length).toBe(1);
  });
});
