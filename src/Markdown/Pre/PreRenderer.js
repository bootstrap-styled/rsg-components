import React from 'react';
import PropTypes from 'prop-types';
import Pre from '@bootstrap-styled/v4/lib/Pre';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-markdown-pre-font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;',
      '$rsg-markdown-pre-font-size': '13px',
      '$rsg-markdown-pre-line-height': '1.5',
      '$rsg-markdown-pre-color': '#333',
      '$rsg-markdown-pre-white-space': 'pre',
      '$rsg-markdown-pre-background-color': '#f5f5f5',
      '$rsg-markdown-pre-padding': '8px 16px',
      '$rsg-markdown-pre-border': '1px #e8e8e8 solid',
      '$rsg-markdown-pre-border-radius': '3px',
      '$rsg-markdown-pre-margin': '0 0 16px 0',
      '$rsg-editor-transition': 'all ease-in-out .1s',
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
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  children: PropTypes.node.isRequired,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-markdown-pre-font-family': PropTypes.string,
      '$rsg-markdown-pre-font-size': PropTypes.string,
      '$rsg-markdown-pre-line-height': PropTypes.string,
      '$rsg-markdown-pre-color': PropTypes.string,
      '$rsg-markdown-pre-white-space': PropTypes.string,
      '$rsg-markdown-pre-background-color': PropTypes.string,
      '$rsg-markdown-pre-padding': PropTypes.string,
      '$rsg-markdown-pre-border': PropTypes.string,
      '$rsg-markdown-pre-border-radius': PropTypes.string,
      '$rsg-markdown-pre-margin': PropTypes.string,
      '$rsg-editor-isolate': PropTypes.bool,
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
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */


const PreRendererUnstyled = (props) => {
  const {
    className,
    children,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <Pre
      className={mapToCssModules(cn(className, 'rsg-markdown-pre'), cssModule)}
      {...attributes}
    >
      {children}
    </Pre>
  );
};

PreRendererUnstyled.defaultProps = defaultProps;
PreRendererUnstyled.propTypes = propTypes;

const PreRenderer = styled(PreRendererUnstyled)` 
  ${(props) => `
    &.rsg-markdown-pre {
      font-family: ${props.theme.styleguide['$rsg-markdown-pre-font-family']};
      font-size: ${props.theme.styleguide['$rsg-markdown-pre-font-size']};
      line-height: ${props.theme.styleguide['$rsg-markdown-pre-line-height']};
      color: ${props.theme.styleguide['$rsg-markdown-pre-color']} !important;
      white-space: ${props.theme.styleguide['$rsg-markdown-pre-white-space']};
      background-color: ${props.theme.styleguide['$rsg-markdown-pre-background-color']};
      padding: ${props.theme.styleguide['$rsg-markdown-pre-padding']};
      border: ${props.theme.styleguide['$rsg-markdown-pre-border']};
      border-radius: ${props.theme.styleguide['$rsg-markdown-pre-border-radius']};
      margin: ${props.theme.styleguide['$rsg-markdown-pre-margin']};
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

PreRenderer.defaultProps = defaultProps;
PreRenderer.propTypes = propTypes;

export default PreRenderer;
