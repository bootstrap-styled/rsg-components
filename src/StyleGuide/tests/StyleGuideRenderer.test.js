/* eslint-disable */
/**
 * Testing our StyleGuideRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import StyleGuideRenderer from '../StyleGuideRenderer';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <StyleGuideRenderer {...props}>
    {children}
  </StyleGuideRenderer>
);

describe('<StyleGuideRenderer />', () => {
  let title;
  let homepageUrl;
  let toc;
  beforeAll(() => {
    title = 'Title';
    homepageUrl = 'https://bootstrap-styled.github.io/rsg-components';
    toc = <a>table of content link</a>;
  });

  it('should render an StyleGuideRenderer with children', () => {
    const renderedComponent = renderComponent({
      title,
      homepageUrl,
      toc,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
