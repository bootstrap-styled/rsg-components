/* eslint-disable */
/**
 * Testing our PlaygroundRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import PlaygroundRenderer from '../PlaygroundRenderer';

const renderComponent = (props = {}) => shallow(
  <PlaygroundRenderer {...props} />
);

describe('<PlaygroundRenderer />', () => {
  it('should render an PlaygroundRenderer', () => {
    const renderedComponent = renderComponent({
      name: 'PlaygroundRenderer content',
      preview: <p>Preview</p>,
      previewProps: {},
      tabButtons: <button>Tab button</button>,
      tabBody: <span>Tab body</span>,
      toolbar: <nav>tool bar</nav>,
    });
    expect(renderedComponent.length).toBe(1);
  });
});
