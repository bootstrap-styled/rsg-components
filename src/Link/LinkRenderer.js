import React from 'react';
import PropTypes from 'prop-types';
import A from '@bootstrap-styled/v4/lib/A';
import { hover } from '@bootstrap-styled/css-mixins/lib/hover';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-link-hover-isolate': 'false',
    },
  },
};

/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-link-hover-isolate': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */

const LinkRendererUnstyled = (props) => {
  const {
    className,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <A
      className={mapToCssModules(cn(className, 'rsg-link'), cssModule)}
      {...attributes}
    />
  );
};

LinkRendererUnstyled.defaultProps = defaultProps;
LinkRendererUnstyled.propTypes = propTypes;

const LinkRenderer = styled(LinkRendererUnstyled)` 
  ${(props) => `
    &.rsg-link {
  ${hover(
    `
      isolation: ${props.theme.styleguide['$rsg-link-hover-isolate']};
    `
  )}
      &:active {
        isolation: ${props.theme.styleguide['$rsg-link-hover-isolate']};
      }
    }
 `}
`;

LinkRenderer.defaultProps = defaultProps;
LinkRenderer.propTypes = propTypes;

export default LinkRenderer;
