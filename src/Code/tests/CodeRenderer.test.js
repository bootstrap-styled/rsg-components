/* eslint-disable */
/**
 * Testing our CodeRenderer component
 */
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
import { mount } from 'enzyme';
import React from 'react';
import CodeRenderer, { defaultProps } from '../CodeRenderer';

const children = (<h1>Test</h1>);

describe('<CodeRenderer />', () => {
  const { theme } = defaultProps;

  it('should render an ComponentListRenderer with theme', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme} injectGlobal={false}>
        <CodeRenderer {...defaultProps}>
          {children}
        </CodeRenderer>
      </BootstrapProvider>
    );
    expect(renderedComponent.find('CodeRendererUnstyled').length).toEqual(1);
  });
  it('should render an ComponentListRenderer with children', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme} injectGlobal={false}>
        <CodeRenderer {...defaultProps}>
          {children}
        </CodeRenderer>
      </BootstrapProvider>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an ComponentListRenderer with dangerouslySetInnerHTML children and lang-js classname', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme} injectGlobal={false}>
        <CodeRenderer {...defaultProps} className="lang-js">
          {children}
        </CodeRenderer>
      </BootstrapProvider>
    );
    expect(renderedComponent.find('Code').props().hasOwnProperty('dangerouslySetInnerHTML')).toBe(true);
    expect(renderedComponent.find('Code').hasClass('lang-js')).toBe(true);
  });
});
