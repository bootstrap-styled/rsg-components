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
      '$rsg-not-found-max-width': '0',
      '$rsg-not-found-margin': '0 auto',
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
      '$rsg-not-found-max-width': PropTypes.string,
      '$rsg-not-found-margin': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */

const NotFoundRendererUnstyled = (props) => {
  const {
    className,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <div className={mapToCssModules(cn(className, 'rsg-markdown-details'), cssModule)} {...attributes}>
      <Markdown
        text="# Page not found. The link you followed may be broken, or the page may have been removed."
      />
    </div>
  );
};

NotFoundRendererUnstyled.defaultProps = defaultProps;
NotFoundRendererUnstyled.propTypes = propTypes;

const NotFoundRenderer = styled(NotFoundRendererUnstyled)`
  ${(props) => `
      &.rsg-not-found {
        max-width: ${props.theme.styleguide['$rsg-not-found-max-width']};
        margin: ${props.theme.styleguide['$rsg-not-found-margin']};
    }
  `};
`;

export default NotFoundRenderer;
