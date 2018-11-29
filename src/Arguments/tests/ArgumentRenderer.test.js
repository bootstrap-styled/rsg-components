/* eslint-disable */
/**
 * Testing our ArgumentsRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import ArgumentsRenderer from '../ArgumentsRenderer';

const renderComponent = (props = {}) => shallow(
  <ArgumentsRenderer {...props} />
);

describe('<ArgumentsRenderer />', () => {
  it('should render an ArgumentsRenderer', () => {
    const renderedComponent = renderComponent({
      args: [
        {
          name: 'test name',
        }
      ],
    });
    expect(renderedComponent.length).toBe(1);
  });
});
