import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import SimpleEditor from 'react-simple-code-editor';
import Prism from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import { space } from 'react-styleguidist/lib/client/styles/theme';

const highlight = (code) => Prism.highlight(code, Prism.languages.jsx, 'jsx');

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-editor-font-family': 'Consolas, "Liberation Mono", Menlo, monospace',
      '$rsg-editor-font-size': '13px',
      '$rsg-editor-bg-color': '#f5f5f5',
      '$rsg-editor-isolate': false,
      '$rsg-editor-transition': 'all ease-in-out .1s',
      '$rsg-editor-border-color': '#e8e8e8',
      '$rsg-editor-border-radius': '3px',
      '$rsg-editor-focus-outline': '0',
      '$rsg-editor-focus-border-color': '#1673b1',
      '$rsg-editor-focus-box-shadow': '0, 0, 0, 2, rgba(22, 115, 177, 0.25)',
      '$rsg-editor-code-comment-color': '#6d6d6d',
      '$rsg-editor-code-punctuation-color': '#999',
      '$rsg-editor-code-namespace-opacity': '0.7',
      '$rsg-editor-code-property-color': '#905',
      '$rsg-editor-code-deleted-color': '#905',
      '$rsg-editor-code-string-color': '#690',
      '$rsg-editor-code-inserted-color': '#690',
      '$rsg-editor-code-operator-color': '#9a6e3a',
      '$rsg-editor-code-keyword-color': '#1673b1',
      '$rsg-editor-code-function-color': '#DD4A68',
      '$rsg-editor-code-variable-color': '#e90',
      '$rsg-editor-code-font-weight': 'bold',
      '$rsg-editor-code-font-style': 'italic',
      '$rsg-editor-code-cursor': 'help',
    },
  },
};

/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line
  code: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-editor-font-family': PropTypes.string,
      '$rsg-editor-font-size': PropTypes.string,
      '$rsg-editor-bg-color': PropTypes.string,
      '$rsg-editor-isolate': PropTypes.bool,
      '$rsg-editor-transition': PropTypes.string,
      '$rsg-editor-border-color': PropTypes.string,
      '$rsg-editor-border-radius': PropTypes.string,
      '$rsg-editor-focus-outline': PropTypes.string,
      '$rsg-editor-focus-border-color': PropTypes.string,
      '$rsg-editor-focus-box-shadow': PropTypes.string,
      '$rsg-editor-code-comment-color': PropTypes.string,
      '$rsg-editor-code-punctuation-color': PropTypes.string,
      '$rsg-editor-code-namespace-opacity': PropTypes.string,
      '$rsg-editor-code-property-color': PropTypes.string,
      '$rsg-editor-code-deleted-color': PropTypes.string,
      '$rsg-editor-code-string-color': PropTypes.string,
      '$rsg-editor-code-inserted-color': PropTypes.string,
      '$rsg-editor-code-operator-color': PropTypes.string,
      '$rsg-editor-code-keyword-color': PropTypes.string,
      '$rsg-editor-code-function-color': PropTypes.string,
      '$rsg-editor-code-variable-color': PropTypes.string,
      '$rsg-editor-code-font-weight': PropTypes.string,
      '$rsg-editor-code-font-style': PropTypes.string,
      '$rsg-editor-code-cursor': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line
};
/* eslint-enable react/require-default-props */

class EditorUnstyled extends Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  state = { code: this.props.code, prevCode: this.props.code };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { code } = nextProps;
    if (prevState.prevCode !== code) {
      return {
        prevCode: code,
        code,
      };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.code !== this.state.code;
  }

  handleChange = (code) => {
    this.setState({ code });
    this.props.onChange(code);
  };

  render() {
    const {
      className,
      cssModule,
    } = omit(this.props, ['theme']);

    return (
      <SimpleEditor
        className={mapToCssModules(cn(className, 'rsg-editor'), cssModule)}
        value={this.state.code}
        onValueChange={this.handleChange}
        highlight={highlight}
        // Padding should be passed via a prop (not CSS) for a proper
        // cursor position calculation
        padding={space[2]}
      />
    );
  }
}

// Moved here because => Uncaught Error: Can only polyfill class components
polyfill(EditorUnstyled);

const Editor = styled(EditorUnstyled)`
  ${(props) => `
    &.rsg-editor {
      font-family: ${props.theme.styleguide['$rsg-editor-font-family']};
      font-size: ${props.theme.styleguide['$rsg-editor-font-size']};
      background-color: ${props.theme.styleguide['$rsg-editor-bg-color']};
      & textarea {
        isolate: ${props.theme.styleguide['$rsg-editor-isolate']};
        transition: ${props.theme.styleguide['$rsg-editor-transition']};
        border: 1px ${props.theme.styleguide['$rsg-editor-border-color']} solid !important;
        border-radius: ${props.theme.styleguide['$rsg-editor-border-radius']};
      }
      & textarea:focus {
        isolate: ${props.theme.styleguide['$rsg-editor-focus-isolate']};
        outline: ${props.theme.styleguide['$rsg-editor-focus-outline']};
        border-color: ${props.theme.styleguide['$rsg-editor-focus-border-color']} !important;
        box-shadow: ${props.theme.styleguide['$rsg-editor-focus-box-shadow']};
      }
      & .token.comment,
        & .token.doctype,
          & .token.cdata {
            isolate: ${props.theme.styleguide['$rsg-editor-isolate']};
            color: ${props.theme.styleguide['$rsg-editor-code-comment-color']};
      }
      & .token.punctuation {
        isolate: ${props.theme.styleguide['$rsg-editor-isolate']};
        color: ${props.theme.styleguide['$rsg-editor-code-punctuation-color']};
      }
      & .namespace {
        isolate: ${props.theme.styleguide['$rsg-editor-isolate']};
        opacity: ${props.theme.styleguide['$rsg-editor-code-namespace-opacity']};
      }
      & .token.property,
        & .token.tag,
          & .token.boolean,
            & .token.number,
              & .token.constant,
                & .token.symbol {
                  isolate: ${props.theme.styleguide['$rsg-editor-isolate']};
                  color: ${props.theme.styleguide['$rsg-editor-code-property-color']};
      }
      & .token.deleted {
        isolate: ${props.theme.styleguide['$rsg-editor-isolate']};
        color: ${props.theme.styleguide['$rsg-editor-code-deleted-color']};
      }
      & .token.selector,
        & .token.attr-name,
          & .token.string,
            & .token.char,
              & .token.builtin {
                isolate: ${props.theme.styleguide['$rsg-editor-isolate']};
                color: ${props.theme.styleguide['$rsg-editor-code-string-color']};
      }
      & .token.inserted {
        isolate: ${props.theme.styleguide['$rsg-editor-isolate']};
        color: ${props.theme.styleguide['$rsg-editor-code-inserted-color']};
      }
      & .token.operator,
        & .token.entity,
          & .token.url,
            & .language-css .token.string,
              & .style .token.string {
                isolate: ${props.theme.styleguide['$rsg-editor-isolate']};
                color: ${props.theme.styleguide['$rsg-editor-code-operator-color']};
      }
      & .token.atrule,
        & .token.attr-value,
          & .token.keyword {
            isolate: ${props.theme.styleguide['$rsg-editor-isolate']};
            color: ${props.theme.styleguide['$rsg-editor-code-keyword-color']};
      }
      & .token.function,
        & .token.class-name{
          isolate: ${props.theme.styleguide['$rsg-editor-isolate']};
          color: ${props.theme.styleguide['$rsg-editor-code-function-color']};
      }
      & .token.regex,
        & .token.important,
          & .token.variable {
            isolate: ${props.theme.styleguide['$rsg-editor-isolate']};
            color: ${props.theme.styleguide['$rsg-editor-code-variable-color']};
      }
      & .token.important,
        & .token.bold{
          isolate: ${props.theme.styleguide['$rsg-editor-isolate']};
          font-weight: ${props.theme.styleguide['$rsg-editor-code-font-weight']};
      }
      & .token.italic {
        isolate: ${props.theme.styleguide['$rsg-editor-isolate']};
        font-style: ${props.theme.styleguide['$rsg-editor-code-font-style']};
      }
      & .token.entity {
        isolate: ${props.theme.styleguide['$rsg-editor-isolate']};
        cursor: ${props.theme.styleguide['$rsg-editor-code-cursor']};
      }
 `}
`;

Editor.defaultProps = defaultProps;
Editor.propTypes = propTypes;
/** @component */
export default Editor;
