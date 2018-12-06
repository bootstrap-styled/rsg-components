import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';
import Markdown from '../Markdown';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-message-margin': '0 0 32px 0',
    },
  },
};

/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Specified node element will be passed as children of `<MessageRenderer />` component. */
  children: PropTypes.node.isRequired,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-message-margin': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */

const MessageRendererUnstyled = (props) => {
  const {
    className,
    children,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <div
      className={mapToCssModules(cn(className, 'rsg-message'), cssModule)}
      {...attributes}
    >
      <Markdown text={Array.isArray(children) ? children.join('\n') : children} />
    </div>
  );
};

MessageRendererUnstyled.defaultProps = defaultProps;
MessageRendererUnstyled.propTypes = propTypes;

const MessageRenderer = styled(MessageRendererUnstyled)` 
  ${(props) => `
    &.rsg-message {
      margin: ${props.theme.styleguide['$rsg-message-margin']};
    }
 `}
`;

MessageRenderer.defaultProps = defaultProps;
MessageRenderer.propTypes = propTypes;

/** @component */
export default MessageRenderer;
