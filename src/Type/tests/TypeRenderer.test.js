/* eslint-disable */
/**
 * Testing our TypeRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import TypeRenderer from '../TypeRenderer';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <TypeRenderer {...props}>
    {children}
  </TypeRenderer>
);

describe('<TypeRenderer />', () => {
  it('should render an TypeRenderer with children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
