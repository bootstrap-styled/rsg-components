import React, { Component } from 'react';
import EditorLoaderRenderer from './EditorLoaderRenderer';

export default class EditorLoader extends Component {
  state = {
    editor: null,
  };

  componentDidMount() {
    System.import('./Editor').then((module) => { // eslint-disable-line no-undef
      this.setState({ editor: module.default });
    });
  }

  render() {
    const Editor = this.state.editor;
    if (Editor) {
      return <Editor {...this.props} />;
    }

    return <EditorLoaderRenderer />;
  }
}
