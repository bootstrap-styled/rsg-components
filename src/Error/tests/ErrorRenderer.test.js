/* eslint-disable */
/**
 * Testing our ErrorRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import ErrorRenderer from '../ErrorRenderer';

const renderComponent = (props = {}) => shallow(
  <ErrorRenderer {...props} />
);

describe('<ErrorRenderer />', () => {
  it('should render an ErrorRenderer', () => {
    const renderedComponent = renderComponent({
      error: {},
      info: {
        componentStack: 'stack',
      },
    });
    expect(renderedComponent.length).toBe(1);
  });
});
