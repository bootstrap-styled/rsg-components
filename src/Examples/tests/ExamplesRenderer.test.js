/* eslint-disable */
/**
 * Testing our ExamplesRenderer component
 */
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
import { shallow } from 'enzyme';
import React from 'react';
import ExamplesRenderer from '../ExamplesRenderer';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <ExamplesRenderer {...props}>
    {children}
  </ExamplesRenderer>
);

describe('<ExamplesRenderer />', () => {
  it('should render an ExamplesRenderer with children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
