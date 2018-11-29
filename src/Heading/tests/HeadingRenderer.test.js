/* eslint-disable */
/**
 * Testing our HeadingRenderer component
 */
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
import { mount } from 'enzyme';
import React from 'react';
import HeadingRenderer, { defaultProps } from '../HeadingRenderer';

const children = ('Test');

describe('<HeadingRenderer />', () => {
  it('should render an HeadingRenderer with H1 children', () => {
    const renderedComponent = mount(
      <HeadingRenderer {...defaultProps} level={1}>
        {children}
      </HeadingRenderer>
    );
    expect(renderedComponent.find('h1').length).toBe(1);
  });
  it('should render an HeadingRenderer with H2 children', () => {
    const renderedComponent = mount(
      <HeadingRenderer {...defaultProps} level={2}>
        {children}
      </HeadingRenderer>
    );
    expect(renderedComponent.find('h2').length).toBe(1);
  });
  it('should render an HeadingRenderer with H3 children', () => {
    const renderedComponent = mount(
      <HeadingRenderer {...defaultProps} level={3}>
        {children}
      </HeadingRenderer>
    );
    expect(renderedComponent.find('h3').length).toBe(1);
  });
  it('should render an HeadingRenderer with H4 children', () => {
    const renderedComponent = mount(
      <HeadingRenderer {...defaultProps} level={4}>
        {children}
      </HeadingRenderer>
    );
    expect(renderedComponent.find('h4').length).toBe(1);
  });
  it('should render an HeadingRenderer with H5 children', () => {
    const renderedComponent = mount(
      <HeadingRenderer {...defaultProps} level={5}>
        {children}
      </HeadingRenderer>
    );
    expect(renderedComponent.find('h5').length).toBe(1);
  });
  it('should render an HeadingRenderer with H6 children', () => {
    const renderedComponent = mount(
      <HeadingRenderer {...defaultProps} level={6}>
        {children}
      </HeadingRenderer>
    );
    expect(renderedComponent.find('h6').length).toBe(1);
  });
});
