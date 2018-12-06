import React from 'react';
import PropTypes from 'prop-types';
import Code from '@bootstrap-styled/v4/lib/Code';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-code-font-family': 'SF Mono, Monaco, "Inconsolata", "Fira Code", "Fira Mono", "Droid Sans Mono", Consolas, "Roboto Mono", "Source Code Pro", monospace',
      '$rsg-code-font-size': 'inherit',
      '$rsg-code-word-wrap': 'break-word',
      '$rsg-code-padding': '0',
      '$rsg-code-color': '#B31255',
      '$rsg-code-background': 'transparent',
      '$rsg-code-white-space': 'inherit',
      '$rsg-code-highlight-font-family': 'SF Mono, Monaco, "Inconsolata", "Fira Code", "Fira Mono", "Droid Sans Mono", Consolas, "Roboto Mono", "Source Code Pro", monospace',
      '$rsg-code-highlight-font-size': 'inherit',
      '$rsg-code-highlight-word-wrap': 'break-word',
      '$rsg-code-highlight-padding': '0',
      '$rsg-code-highlight-color': 'inherit',
      '$rsg-code-highlight-background': 'transparent',
      '$rsg-code-highlight-white-space': 'inherit',
    },
  },
};
/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /**
   * @ignore
   */
  children: PropTypes.node.isRequired,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-code-font-family': PropTypes.string,
      '$rsg-code-font-size': PropTypes.string,
      '$rsg-code-word-wrap': PropTypes.string,
      '$rsg-code-padding': PropTypes.string,
      '$rsg-code-color': PropTypes.string,
      '$rsg-code-background': PropTypes.string,
      '$rsg-code-white-space': PropTypes.string,
      '$rsg-code-highlight-font-family': PropTypes.string,
      '$rsg-code-highlight-font-size': PropTypes.string,
      '$rsg-code-highlight-word-wrap': PropTypes.string,
      '$rsg-code-highlight-padding': PropTypes.string,
      '$rsg-code-highlight-color': PropTypes.string,
      '$rsg-code-highlight-background': PropTypes.string,
      '$rsg-code-highlight-white-space': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */


const CodeRendererUnstyled = (props) => {
  const {
    className,
    children,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  const isHighlighted = className && className.indexOf('lang-') !== -1;

  if (isHighlighted) {
    return (
      <Code
        className={cn(className, 'rsg-code-highlight')}
        dangerouslySetInnerHTML={{ __html: children }}
      />);
  }
  return (
    <Code
      className={mapToCssModules(cn(className, 'rsg-code'), cssModule)}
      {...attributes}
    >
      {children}
    </Code>
  );
};

CodeRendererUnstyled.defaultProps = defaultProps;
CodeRendererUnstyled.propTypes = propTypes;

const CodeRenderer = styled(CodeRendererUnstyled)` 
  ${(props) => `
    &.rsg-code {
      font-family: ${props.theme.styleguide['$rsg-code-font-family']};
      word-wrap: ${props.theme.styleguide['$rsg-code-word-wrap']};
      padding: ${props.theme.styleguide['$rsg-code-padding']};
      font-size: ${props.theme.styleguide['$rsg-code-font-size']};
      color: ${props.theme.styleguide['$rsg-code-color']};
      background: ${props.theme.styleguide['$rsg-code-background']};
      white-space: ${props.theme.styleguide['$rsg-code-white-space']};
    }
    &.rsg-code-highlight {
      font-family: ${props.theme.styleguide['$rsg-code-highlight-font-family']};
      word-wrap: ${props.theme.styleguide['$rsg-code-highlight-word-wrap']};
      padding: ${props.theme.styleguide['$rsg-code-highlight-padding']};
      font-size: ${props.theme.styleguide['$rsg-code-highlight-font-size']};
      color: ${props.theme.styleguide['$rsg-code-highlight-color']};
      background: ${props.theme.styleguide['$rsg-code-highlight-background']};
      white-space: ${props.theme.styleguide['$rsg-code-highlight-white-space']};
    }
 `}
`;

CodeRenderer.defaultProps = defaultProps;
CodeRenderer.propTypes = propTypes;

/** @component */
export default CodeRenderer;
