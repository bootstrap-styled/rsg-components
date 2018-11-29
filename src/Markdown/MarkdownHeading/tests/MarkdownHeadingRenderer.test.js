/* eslint-disable */
/**
 * Testing our MarkdownHeadingRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import MarkdownHeadingRenderer from '../MarkdownHeadingRenderer';

const children = <h1>Test children</h1>;

const renderComponent = (props = {}) => shallow(
  <MarkdownHeadingRenderer {...props}>
    {children}
  </MarkdownHeadingRenderer>
);

describe('<MarkdownHeadingRenderer />', () => {
  it('should render an MarkdownHeadingRenderer', () => {
    const renderedComponent = renderComponent({
      level: 1,
    });
    expect(renderedComponent.length).toBe(1);
  });
});
