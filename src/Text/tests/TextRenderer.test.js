/* eslint-disable */
/**
 * Testing our TextRenderer component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
import TextRenderer, { defaultProps } from '../TextRenderer';

const { theme } = defaultProps;
const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <TextRenderer {...props}>
    {children}
  </TextRenderer>
);

const renderComponentUsingTheme = (props) => mount(
  <BootstrapProvider theme={theme} injectGlobal={false}>
    <TextRenderer {...props}>
      {children}
    </TextRenderer>
  </BootstrapProvider>
);

describe('<TextRenderer />', () => {
  it('should render an TextRenderer with children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an TextRenderer with strong tag', () => {
    const renderedComponent = renderComponentUsingTheme({
      semantic: 'strong',
    });
    expect(renderedComponent.find('Strong').length).toBe(1);
  });
  it('should render an TextRenderer with em tag', () => {
    const renderedComponent = renderComponentUsingTheme({
      semantic: 'em',
    });
    expect(renderedComponent.find('em').length).toBe(1);
  });
  it('should render an TextRenderer with span tag', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('span').length).toBe(1);
  });
  it('should render an TextRenderer with em tag with size-inherit classname', () => {
    const renderedComponent = renderComponentUsingTheme({
      semantic: 'em',
      size: 'inherit',
    });
    expect(renderedComponent.find('em').hasClass('size-inherit')).toEqual(true);
  });
  it('should render an TextRenderer with em tag with size-small classname', () => {
    const renderedComponent = renderComponentUsingTheme({
      semantic: 'em',
      size: 'small',
    });
    expect(renderedComponent.find('em').hasClass('size-small')).toEqual(true);
  });
  it('should render an TextRenderer with em tag with size-base classname', () => {
    const renderedComponent = renderComponentUsingTheme({
      semantic: 'em',
      size: 'base',
    });
    expect(renderedComponent.find('em').hasClass('size-base')).toEqual(true);
  });
  it('should render an TextRenderer with em tag with size-text classname', () => {
    const renderedComponent = renderComponentUsingTheme({
      semantic: 'em',
      size: 'text',
    });
    expect(renderedComponent.find('em').hasClass('size-text')).toEqual(true);
  });
  it('should render an TextRenderer with em tag with color-base classname', () => {
    const renderedComponent = renderComponentUsingTheme({
      semantic: 'em',
      color: 'base',
    });
    expect(renderedComponent.find('em').hasClass('color-base')).toEqual(true);
  });
  it('should render an TextRenderer with em tag with color-light classname', () => {
    const renderedComponent = renderComponentUsingTheme({
      semantic: 'em',
      color: 'light',
    });
    expect(renderedComponent.find('em').hasClass('color-light')).toEqual(true);
  });
  it('should render an TextRenderer with em tag with color-light classname', () => {
    const renderedComponent = renderComponentUsingTheme({
      semantic: 'em',
      underlined: true,
    });
    expect(renderedComponent.find('em').hasClass('underlined')).toEqual(true);
  });
});
