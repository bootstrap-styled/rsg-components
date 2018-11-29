/* eslint-disable */
/**
 * Testing our RibbonRenderer component
 */
import { mount } from 'enzyme';
import React from 'react';
import RibbonRenderer from '../RibbonRenderer';

const renderComponent = (props = {}) => mount(
  <RibbonRenderer {...props} />
);

describe('<RibbonRenderer />', () => {
  let url;
  let text;
  beforeAll(() => {
    url = 'https://www.yeutech.com';
    text = 'Fork us';
  });
  it('should render an RibbonRenderer ', () => {
    const renderedComponent = renderComponent({
      url,
      text,
    });
    expect(renderedComponent.length).toBe(1);
    expect(renderedComponent.find('a').props().href).toEqual('https://www.yeutech.com');
    expect(renderedComponent.find('a').props().children).toEqual('Fork us');
  });
});
