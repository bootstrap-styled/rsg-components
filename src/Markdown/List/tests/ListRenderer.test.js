/* eslint-disable */
/**
 * Testing our ListRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import ListRenderer from '../ListRenderer';

const children = <h1>Test children</h1>;

const renderComponent = (props = {}) => shallow(
  <ListRenderer {...props}>
    {children}
  </ListRenderer>
);

describe('<ListRenderer />', () => {
  it('should render an ListRenderer', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.length).toBe(1);
  });
});
