/* eslint-disable */
/**
 * Testing our SectionsRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import SectionsRenderer from '../SectionsRenderer';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <SectionsRenderer {...props}>
    {children}
  </SectionsRenderer>
);

describe('<SectionsRenderer />', () => {
  it('should render an SectionsRenderer with children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
