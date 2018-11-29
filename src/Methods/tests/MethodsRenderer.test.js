/* eslint-disable */
/**
 * Testing our MethodsRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import MethodsRenderer from '../MethodsRenderer';


const renderComponent = (props = {}) => shallow(
  <MethodsRenderer {...props} />
);

describe('<MethodsRenderer />', () => {
  let methods;
  beforeAll(() => {
    methods = [
      {
        name: 'test name',
      },
    ];
  });
  it('should render an MethodsRenderer', () => {
    const renderedComponent = renderComponent({
      methods,
    });
    expect(renderedComponent.length).toBe(1);
  });
});
