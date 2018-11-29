import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import styled from 'styled-components';
import Summary from '@bootstrap-styled/v4/lib/Summary';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-markdown-details-summary-margin-bottom': '0',
      '$rsg-markdown-details-summary-font-family': '0',
      '$rsg-markdown-details-summary-font-size': '0',
      '$rsg-markdown-details-summary-color': '0',
      '$rsg-markdown-details-summary-focused-isolate': 'false',
      '$rsg-markdown-details-summary-focused-outline': ' 1 dotted blue',
      '$rsg-markdown-details-summary-focused-outline-offset': '2',

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
      '$rsg-markdown-details-summary-margin-bottom': PropTypes.string,
      '$rsg-markdown-details-summary-font-family': PropTypes.string,
      '$rsg-markdown-details-summary-font-size': PropTypes.string,
      '$rsg-markdown-details-summary-color': PropTypes.string,
      '$rsg-markdown-details-summary-focused-isolate': PropTypes.string,
      '$rsg-markdown-details-summary-focused-outline': PropTypes.string,
      '$rsg-markdown-details-summary-focused-outline-offset': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */

const DetailsSummaryRendererUnstyled = (props) => {
  const {
    className,
    children,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <Summary
      className={mapToCssModules(cn(className, 'rsg-markdown-details-summary'), cssModule)}
      {...attributes}
    >
      {children}
    </Summary>
  );
};

DetailsSummaryRendererUnstyled.defaultProps = defaultProps;
DetailsSummaryRendererUnstyled.propTypes = propTypes;

const DetailsSummaryRenderer = styled(DetailsSummaryRendererUnstyled)`
  ${(props) => `
      &.rsg-markdown-details-summary {
        margin-bottom: ${props.theme.styleguide['$rsg-markdown-details-margin-bottom']};
        font-family: ${props.theme.styleguide['$rsg-markdown-details-font-family']};
        font-size: ${props.theme.styleguide['$rsg-markdown-details-font-size']};
        color: ${props.theme.styleguide['$rsg-markdown-detail-color']};
        &:focus {
          isolate: ${props.theme.styleguide['$rsg-markdown-details-summary-focused-isolate']};
          outline: ${props.theme.styleguide['$rsg-markdown-details-summary-focused-outline']};
          outline-offset: ${props.theme.styleguide['$rsg-markdown-details-summary-focused-outline-offset']};
        }
    }
  `};
`;

export default DetailsSummaryRenderer;
