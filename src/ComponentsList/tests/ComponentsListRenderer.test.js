/**
 * Testing our ComponentsListRenderer component
 */
import React from 'react';
import { mount } from 'enzyme';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
import ComponentsListRenderer, { defaultProps } from '../ComponentsListRenderer';

describe('<ComponentsListRenderer />', () => {
  const { theme } = defaultProps;
  let props;

  beforeEach(() => {
    props = Object.assign(defaultProps, {
      items: [
        {
          visibleName: 'First component',
          href: '/#first-component',
          filepath: 'first-component.md',
          heading: false,
          level: 0,
          content: false,
          collapse: true,
          slug: 'first-component',
          components: [],
          sections: [],
        },
      ],
      isOpenCollapse: false,
    });
  });

  it('should render an ComponentListRenderer with theme', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme} injectGlobal={false}>
        <ComponentsListRenderer
          {...props}
        />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('ComponentsListRendererUnstyled').length).toEqual(1);
  });
  it('should render a ComponentsListRenderer with items', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme} injectGlobal={false}>
        <ComponentsListRenderer
          {...props}
        />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('ComponentsListRendererUnstyled').props().items).toEqual([{
      collapse: true,
      components: [],
      content: false,
      filepath: 'first-component.md',
      heading: false,
      href: '/#first-component',
      level: 0,
      visibleName: 'First component',
      sections: [],
      slug: 'first-component',
    }]);
  });
  it('should render an ComponentsListRenderer without collapse', () => {
    const newProps = {
      theme,
      items: [
        {
          visibleName: 'First component',
          href: '/#first-component',
          filepath: 'first-component.md',
          heading: true,
          level: 0,
          content: false,
          collapse: false,
          slug: 'first-component',
          components: [],
          sections: [
            {
              visibleName: 'Sub component',
              href: '/#sub-component',
              filepath: 'sub-component.md',
              heading: false,
              level: 0,
              content: false,
              collapse: false,
              slug: 'sub-component',
              components: [],
              sections: [],
            },
          ],
        },
      ],
    };
    const renderedComponent = mount(
      <BootstrapProvider theme={theme} injectGlobal={false}>
        <ComponentsListRenderer
          {...newProps}
        />
      </BootstrapProvider>
    );
    expect(renderedComponent.contains('Collapse')).toBe(false);
  });
  it('should not render any children', () => {
    const newProps = {
      theme,
      items: [],
    };
    const renderedComponent = mount(
      <BootstrapProvider theme={theme} injectGlobal={false}>
        <ComponentsListRenderer
          {...newProps}
        />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('ComponentsListRendererUnstyled').props().children).toBe(undefined);
  });
});
