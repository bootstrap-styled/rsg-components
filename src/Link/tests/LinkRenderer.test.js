/* eslint-disable */
/**
 * Testing our LinkRenderer component
 */
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
import { shallow } from 'enzyme';
import React from 'react';
import LinkRenderer from '../LinkRenderer';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <LinkRenderer {...props}>
    {children}
  </LinkRenderer>
);

describe('<LinkRenderer />', () => {
  it('should render an LinkRenderer with children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
