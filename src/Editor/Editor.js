import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import debounce from 'lodash.debounce';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/lib/codemirror.css';
import 'rsg-codemirror-theme.css';

const UPDATE_DELAY = 10;

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-editor-code-mirror-isolation': false,
      '$rsg-editor-code-mirror-font-family': 'Consolas, "Liberation Mono", Menlo, monospace',
      '$rsg-editor-code-mirror-height': 'auto',
      '$rsg-editor-code-mirror-padding': '4px 8px',
      '$rsg-editor-code-mirror-font-size': '13px',
      '$rsg-editor-code-mirror-pre-isolation': false,
      '$rsg-editor-code-mirror-pre-padding': '0',
      '$rsg-editor-code-mirror-scroll-isolation': false,
      '$rsg-editor-code-mirror-scroll-height': 'auto',
      '$rsg-editor-code-mirror-scroll-overflow-y': 'hidden',
      '$rsg-editor-code-mirror-scroll-overflow-x': 'auto',
      '$rsg-editor-code-mirror-cm-error-isolation': false,
      '$rsg-editor-code-mirror-cm-error-background': 'none',
    },
  },
};

/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  code: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  editorConfig: PropTypes.object, // eslint-disable-line react/require-default-props
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-editor-code-mirror-isolation': PropTypes.bool,
      '$rsg-editor-code-mirror-font-family': PropTypes.string,
      '$rsg-editor-code-mirror-height': PropTypes.string,
      '$rsg-editor-code-mirror-padding': PropTypes.string,
      '$rsg-editor-code-mirror-font-size': PropTypes.string,
      '$rsg-editor-code-mirror-pre-isolation': PropTypes.bool,
      '$rsg-editor-code-mirror-pre-padding': PropTypes.string,
      '$rsg-editor-code-mirror-scroll-isolation': PropTypes.bool,
      '$rsg-editor-code-mirror-scroll-height': PropTypes.string,
      '$rsg-editor-code-mirror-scroll-overflow-y': PropTypes.string,
      '$rsg-editor-code-mirror-scroll-overflow-x': PropTypes.string,
      '$rsg-editor-code-mirror-cm-error-isolation': PropTypes.bool,
      '$rsg-editor-code-mirror-cm-error-background': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */

class EditorUnstyled extends Component {
  static propTypes = propTypes;
  static contextTypes = {
    config: PropTypes.object.isRequired,
  };
  static defaultProps = defaultProps;

  constructor() {
    super();
    this.handleChange = debounce(this.handleChange.bind(this), UPDATE_DELAY);
  }

  shouldComponentUpdate(nextProps) {
    return !!(this.getEditorConfig(nextProps).readOnly && nextProps.code !== this.props.code);
  }

  getEditorConfig(props) {
    return {
      ...this.context.config.editorConfig,
      ...props.editorConfig,
    };
  }

  handleChange(editor, metadata, newCode) {
    const { onChange } = this.props;
    if (onChange) {
      onChange(newCode);
    }
  }

  render() {
    const {
      className,
      code,
      cssModule,
      ...attributes
    } = omit(this.props, ['theme']);

    return (
      <CodeMirror
        className={mapToCssModules(cn(className, 'rsg-editor'), cssModule)}
        {...attributes}
        value={code}
        onChange={this.handleChange}
        options={this.getEditorConfig(this.props)}
      />
    );
  }
}

const Editor = styled(EditorUnstyled)`
  ${(props) => `
    &.rsg-editor {
      .CodeMirror.CodeMirror {
        isolation: ${props.theme.styleguide['$rsg-editor-code-mirror-isolate']};
        font-family: ${props.theme.styleguide['$rsg-editor-code-mirror-font-family']};
        height: ${props.theme.styleguide['$rsg-editor-code-mirror-height']};
        padding: ${props.theme.styleguide['$rsg-editor-code-mirror-padding']};
        font-size: ${props.theme.styleguide['$rsg-editor-code-mirror-font-size']};
      }
      .CodeMirror.CodeMirror pre {
        isolation: ${props.theme.styleguide['$rsg-editor-code-mirror-pre-isolate']};
        padding: ${props.theme.styleguide['$rsg-editor-code-mirror-pre-padding']};
      }
      .CodeMirror-scroll.CodeMirror-scroll {
        isolation: ${props.theme.styleguide['$rsg-editor-code-mirror-scroll-isolate']};
        height: ${props.theme.styleguide['$rsg-editor-code-mirror-scroll-height']};
        overflow-y: ${props.theme.styleguide['$rsg-editor-code-mirror-scroll-overflow-y']};
        overflow-x: ${props.theme.styleguide['$rsg-editor-code-mirror-scroll-overflow-x']};
      }
      .cm-error.cm-error {
        isolation: ${props.theme.styleguide['$rsg-editor-code-mirror-cm-error-isolate']};
        background: ${props.theme.styleguide['$rsg-editor-code-mirror-cm-error-']};
      }
    }
 `}
`;

Editor.defaultProps = defaultProps;
Editor.propTypes = propTypes;

export default Editor;
