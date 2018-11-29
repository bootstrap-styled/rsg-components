/* eslint-disable */
/**
 * Testing our ArgumentRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import ArgumentRenderer from '../ArgumentRenderer';

const renderComponent = (props = {}) => shallow(
  <ArgumentRenderer {...props} />
);

describe('<ArgumentRenderer />', () => {
  it('should render an ArgumentRenderer', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.length).toBe(1);
  });
});
