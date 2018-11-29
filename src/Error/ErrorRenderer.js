import React from 'react';
import PropTypes from 'prop-types';
import Pre from '@bootstrap-styled/v4/lib/Pre';
import P from '@bootstrap-styled/v4/lib/P';
import A from '@bootstrap-styled/v4/lib/A';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';


export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-error-margin': '8px',
      '$rsg-error-line-height': '1.2',
      '$rsg-error-font-size': '13px',
      '$rsg-error-stack-color': '#c00',
      '$rsg-error-stack-white-space': 'pre-wrap',
      '$rsg-error-stack-font-family': 'Consolas, "Liberation Mono", Menlo, monospace',
      '$rsg-error-message-color': '#c00',
      '$rsg-error-message-font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    },
  },
};

/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Error will be displayed as a string. */
  error: PropTypes.object.isRequired,
  /** Info will be displayed as a string. */
  info: PropTypes.shape({
    componentStack: PropTypes.any.isRequired,
  }).isRequired,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-error-margin': PropTypes.string,
      '$rsg-error-line-height': PropTypes.string,
      '$rsg-error-font-size': PropTypes.string,
      '$rsg-error-stack-color': PropTypes.string,
      '$rsg-error-stack-white-space': PropTypes.string,
      '$rsg-error-stack-font-family': PropTypes.string,
      '$rsg-error-message-color': PropTypes.string,
      '$rsg-error-message-font-family': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */

const ErrorRendererUnstyled = (props) => {
  const {
    className,
    error,
    info,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <div
      className={mapToCssModules(cn(className, 'rsg-error'), cssModule)}
      {...attributes}
    >
      <Pre className="error-stack">
        {error.toString()}
        {info.componentStack.toString()}
      </Pre>
      <div className="error-message">
        <P>
          This may be due to an error in a component you are overriding, or a bug in React
          Styleguidist.
        </P>
        <P>
          If you believe this is a bug,&nbsp;
          <A
            style={{ color: 'inherit' }}
            href="https://github.com/styleguidist/react-styleguidist/issues"
          >
            please submit an issue
          </A>.
        </P>
      </div>
    </div>
  );
};

ErrorRendererUnstyled.defaultProps = defaultProps;
ErrorRendererUnstyled.propTypes = propTypes;

const ErrorRenderer = styled(ErrorRendererUnstyled)` 
  ${(props) => `
    &.rsg-error {
      margin: ${props.theme.styleguide['$rsg-error-margin']};
      line-height: ${props.theme.styleguide['$rsg-error-line-height']};
      font-size: ${props.theme.styleguide['$rsg-error-font-size']};
      .error-stack {
        color: ${props.theme.styleguide['$rsg-error-stack-color']};
        white-space: ${props.theme.styleguide['$rsg-error-stack-white-space']};
        font-family: ${props.theme.styleguide['$rsg-error-stack-font-family']};
      }
      .error-message {
        color: ${props.theme.styleguide['$rsg-error-message-color']};
        font-family: ${props.theme.styleguide['$rsg-error-message-font-family']};
      }
    }
 `}
`;

ErrorRenderer.defaultProps = defaultProps;
ErrorRenderer.propTypes = propTypes;

export default ErrorRenderer;
