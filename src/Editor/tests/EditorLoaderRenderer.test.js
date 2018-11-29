/* eslint-disable */
/**
 * Testing our EditorLoaderRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import EditorLoaderRenderer from '../EditorLoaderRenderer';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <EditorLoaderRenderer {...props}>
    {children}
  </EditorLoaderRenderer>
);

describe('<EditorLoaderRenderer />', () => {
  it('should render an EditorLoaderRenderer with children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
