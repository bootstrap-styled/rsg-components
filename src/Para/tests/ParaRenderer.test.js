/* eslint-disable */
/**
 * Testing our ParaRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import ParaRenderer, { defaultProps } from '../ParaRenderer';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <ParaRenderer {...props}>
    {children}
  </ParaRenderer>
);

describe('<ParaRenderer />', () => {
  it('should render an ParaRenderer with children', () => {
    const renderedComponent = renderComponent({
      ...defaultProps,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
