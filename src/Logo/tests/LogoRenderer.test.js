/* eslint-disable */
/**
 * Testing our LogoRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import LogoRenderer from '../LogoRenderer';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <LogoRenderer {...props}>
    {children}
  </LogoRenderer>
);

describe('<LogoRenderer />', () => {
  it('should render an LogoRenderer with children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
