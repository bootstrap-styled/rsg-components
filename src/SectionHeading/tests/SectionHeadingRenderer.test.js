/* eslint-disable */
/**
 * Testing our SectionHeadingRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import SectionHeadingRenderer from '../SectionHeadingRenderer';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <SectionHeadingRenderer {...props}>
    {children}
  </SectionHeadingRenderer>
);

describe('<SectionHeadingRenderer />', () => {
  let id;
  let href;
  let depth;
  beforeAll(() => {
    id = 'id-gjhg';
    href = 'https://www.yeutech.com';
    depth = 1;
  });
  it('should render an SectionHeadingRenderer with children', () => {
    const renderedComponent = renderComponent({
      id,
      href,
      depth,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
