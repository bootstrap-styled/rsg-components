/* eslint-disable */
/**
 * Testing our WelcomeRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import WelcomeRenderer from '../WelcomeRenderer';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <WelcomeRenderer {...props}>
    {children}
  </WelcomeRenderer>
);

describe('<WelcomeRenderer />', () => {
  let patterns = [];
  it('should render an WelcomeRenderer with children', () => {
    const renderedComponent = renderComponent({
      patterns,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
