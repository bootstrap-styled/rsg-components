
import React from 'react';
import PropTypes from 'prop-types';
import Group from 'react-group';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';
import Markdown from '../Markdown';
import Name from '../Name';
import Type from '../Type';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-argument-margin': '0 0 8px 0',
    },
  },
};

/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Display argument name. */
  name: PropTypes.string,
  /** Display argument type name. */
  type: PropTypes.object,
  /** Default value. */
  default: PropTypes.string,
  /** Display argument description. */
  description: PropTypes.string,
  /** Toggle returns and display string "Returns". */
  returns: PropTypes.bool,
  /** Toggle block style. */
  block: PropTypes.bool,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-argument-margin': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */


const ArgumentRendererUnstyled = (props) => {
  const {
    className,
    name,
    description,
    returns,
    block,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  let { type } = this.props;

  const isOptional = type && type.type === 'OptionalType';
  const defaultValue = props.default;
  if (isOptional) {
    type = type.expression;
  }

  return (
    <Group
      className={mapToCssModules(cn(className, 'rsg-argument', { block }), cssModule)}
      {...attributes}
    >
      {returns && 'Returns'}
      {name && (
        <span>
          <Name>{name}</Name>
          {type && ':'}
        </span>
      )}
      {type && (
        <Type>
          {type.name}
          {isOptional && '?'}
          {!!defaultValue && `=${defaultValue}`}
        </Type>
      )}
      {type && description && ' — '}
      {description && <Markdown text={`${description}`} inline />}
    </Group>
  );
};

ArgumentRendererUnstyled.defaultProps = defaultProps;
ArgumentRendererUnstyled.propTypes = propTypes;

const ArgumentRenderer = styled(ArgumentRendererUnstyled)` 
  ${(props) => `
    &.rsg-argument.block {
      font-size: ${props.theme.styleguide['$rsg-argument-margin']};
    }
 `}
`;

ArgumentRenderer.defaultProps = defaultProps;
ArgumentRenderer.propTypes = propTypes;

/** @component */
export default ArgumentRenderer;
