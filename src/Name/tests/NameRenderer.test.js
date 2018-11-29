/* eslint-disable */
/**
 * Testing our NameRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import NameRenderer from '../NameRenderer';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <NameRenderer {...props}>
    {children}
  </NameRenderer>
);

describe('<NameRenderer />', () => {
  it('should render an NameRenderer with children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
