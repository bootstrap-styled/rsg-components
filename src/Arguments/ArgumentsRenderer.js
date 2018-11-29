import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';
import Argument from '../Argument';
import Heading from '../Heading';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-arguments-margin': '0 0 8px 0',
      '$rsg-arguments-font-size': 'inherit',
      '$rsg-arguments-heading-margin': '0 0 4px 0',
    },
  },
};
/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Arguments name, type and description passed to `<Argument />` component. Can be: */
  args: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.object,
    description: PropTypes.string,
  })).isRequired,
  /** Toggle heading style. */
  heading: PropTypes.bool, // eslint-disable-line react/require-default-props  /** Theme variables. Can be: */
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-arguments-margin': PropTypes.string,
      '$rsg-arguments-font-size': PropTypes.string,
      '$rsg-arguments-heading-margin': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */


const ArgumentsRendererUnstyled = (props) => {
  const {
    className,
    args,
    heading,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  if (args.length === 0) {
    return null;
  }

  return (
    <div
      className={mapToCssModules(cn(className, 'rsg-arguments'), cssModule)}
      {...attributes}
    >
      {heading && (
        <div>
          <Heading className="rsg-arguments-heading" level={5}>Arguments</Heading>
        </div>
      )}
      {args.map((arg) => <Argument key={arg.name} {...arg} />)}
    </div>
  );
};

ArgumentsRendererUnstyled.defaultProps = defaultProps;
ArgumentsRendererUnstyled.propTypes = propTypes;

const ArgumentsRenderer = styled(ArgumentsRendererUnstyled)` 
  ${(props) => `
    &.rsg-arguments {
      margin: ${props.theme.styleguide['$rsg-arguments-margin']};
      font-size: ${props.theme.styleguide['$rsg-arguments-font-size']};
      .rsg-arguments-heading {
        margin: ${props.theme.styleguide['$rsg-arguments-heading-margin']};
      }
    }
 `}
`;

ArgumentsRenderer.defaultProps = defaultProps;
ArgumentsRenderer.propTypes = propTypes;

export default ArgumentsRenderer;
