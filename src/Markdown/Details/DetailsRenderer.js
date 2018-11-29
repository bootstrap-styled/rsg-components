import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import styled from 'styled-components';
import Details from '@bootstrap-styled/v4/lib/Details';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-markdown-details-margin-bottom': '0',
      '$rsg-markdown-details-font-family': '0',
      '$rsg-markdown-details-font-size': '0',
      '$rsg-markdown-details-color': '0',
    },
  },
};

/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Specified node element will be passed as children of `<HeadingRenderer />` component. */
  children: PropTypes.node.isRequired,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-heading-margin': PropTypes.string,
      '$rsg-markdown-details-margin-bottom': PropTypes.string,
      '$rsg-markdown-details-font-family': PropTypes.string,
      '$rsg-markdown-details-font-size': PropTypes.string,
      '$rsg-markdown-details-color': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */

const DetailsRendererUnstyled = (props) => {
  const {
    className,
    children,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <Details
      className={mapToCssModules(cn(className, 'rsg-markdown-details'), cssModule)}
      {...attributes}
    >
      {children}
    </Details>
  );
};

DetailsRendererUnstyled.defaultProps = defaultProps;
DetailsRendererUnstyled.propTypes = propTypes;

const DetailsRenderer = styled(DetailsRendererUnstyled)`
  ${(props) => `
      &.rsg-markdown-details {
        margin-bottom: ${props.theme.styleguide['$rsg-markdown-details-margin-bottom']};
        font-family: ${props.theme.styleguide['$rsg-markdown-details-font-family']};
        font-size: ${props.theme.styleguide['$rsg-markdown-details-font-size']};
        color: ${props.theme.styleguide['$rsg-markdown-detail-color']};
    }
  `};
`;

export default DetailsRenderer;
