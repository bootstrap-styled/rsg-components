import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@bootstrap-styled/v4/lib/Button';
import { hover } from '@bootstrap-styled/css-mixins/lib/hover';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';
import { DOCS_DOCUMENTING } from 'react-styleguidist/scripts/consts';
import Markdown from '../Markdown';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-example-placeholder-outline': 'none',
      '$rsg-example-placeholder-padding': '0',
      '$rsg-example-placeholder-font-size': '15px',
      '$rsg-example-placeholder-font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      '$rsg-example-placeholder-decoration': 'underline',
      '$rsg-example-placeholder-color': '#767676',
      '$rsg-example-placeholder-border': '0',
      '$rsg-example-placeholder-cursor': 'pointer',
      '$rsg-example-placeholder-background': 'transparent',
      '$rsg-example-placeholder-hover-isolate': 'false',
      '$rsg-example-placeholder-hover-color': '#ccc',
    },
  },
};
/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Component name used in example. */
  name: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-example-placeholder-outline': PropTypes.string,
      '$rsg-example-placeholder-padding': PropTypes.string,
      '$rsg-example-placeholder-font-size': PropTypes.string,
      '$rsg-example-placeholder-font-family': PropTypes.string,
      '$rsg-example-placeholder-decoration': PropTypes.string,
      '$rsg-example-placeholder-color': PropTypes.string,
      '$rsg-example-placeholder-border': PropTypes.string,
      '$rsg-example-placeholder-cursor': PropTypes.string,
      '$rsg-example-placeholder-backgound': PropTypes.string,
      '$rsg-example-placeholder-hover-isolate': PropTypes.string,
      '$rsg-example-placeholder-hover-color': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */


export class ExamplePlaceholderRendererUnstyled extends Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  constructor() {
    super();
    this.handleOpen = this.handleOpen.bind(this);
    this.state = {
      isVisible: false,
    };
  }

  handleOpen() {
    this.setState({ isVisible: true });
  }

  render() {
    const {
      className,
      name,
      cssModule,
      ...attributes
    } = omit(this.props, ['theme']);
    const { isVisible } = this.state;
    if (isVisible) {
      /* eslint-disable no-tabs */
      return (
        <Markdown
          text={`
Create **Readme.md** or **${name}.md** file in the component’s folder like this:

    ${name} example:

    \`\`\`js
    <${name} pizza="\uD83C\uDF55" />
	\`\`\`

You may need to **restart** the style guide server after adding an example file.

Read more in the [documenting components guide](${DOCS_DOCUMENTING}).
					`}
        />
      );
      /* eslint-enable no-tabs */
    }

    return (
      <Button
        className={mapToCssModules(cn(className, 'rsg-example-placeholder'), cssModule)}
        {...attributes}
        onClick={this.handleOpen}
      >
        Add examples to this component
      </Button>
    );
  }
}

const ExamplePlaceholderRenderer = styled(ExamplePlaceholderRendererUnstyled)` 
  ${(props) => `
    &.rsg-example-placeholder {
      outline: ${props.theme.styleguide['$rsg-example-placeholder-outline']} !important;
      padding: ${props.theme.styleguide['$rsg-example-placeholder-padding']};
      font-size: ${props.theme.styleguide['$rsg-example-placeholder-font-size']};
      font-family: ${props.theme.styleguide['$rsg-example-placeholder-font-family']};
      text-decoration: ${props.theme.styleguide['$rsg-example-placeholder-decoration']};
      color: ${props.theme.styleguide['$rsg-example-placeholder-color']};
      border: ${props.theme.styleguide['$rsg-example-placeholder-border']};
      cursor: ${props.theme.styleguide['$rsg-example-placeholder-cursor']};
      background: ${props.theme.styleguide['$rsg-example-placeholder-background']};
   ${hover(
    `
      isolation: ${props.theme.styleguide['$rsg-example-placeholder-hover-isolate']};
      color: ${props.theme.styleguide['$rsg-example-placeholder-hover-color']};
    `
  )}
      &:active {
        isolation: ${props.theme.styleguide['$rsg-example-placeholder-hover-isolate']};
        color: ${props.theme.styleguide['$rsg-example-placeholder-hover-color']};
      }
    }
 `}
`;

ExamplePlaceholderRenderer.defaultProps = defaultProps;
ExamplePlaceholderRenderer.propTypes = propTypes;

export default ExamplePlaceholderRenderer;
