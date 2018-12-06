import React from 'react';
import PropTypes from 'prop-types';
import bp from '@bootstrap-styled/css-mixins/lib/breakpoints';
import H1 from '@bootstrap-styled/v4/lib/H1';
import H2 from '@bootstrap-styled/v4/lib/H2';
import H3 from '@bootstrap-styled/v4/lib/H3';
import H4 from '@bootstrap-styled/v4/lib/H4';
import H5 from '@bootstrap-styled/v4/lib/H5';
import H6 from '@bootstrap-styled/v4/lib/H6';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';

const typoList = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
};

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-heading-margin': '0',
      '$rsg-heading-color': '#292b2c',
      '$rsg-heading-padding': '20px 0 15px 0',
      '$rsg-heading-mobile-line-height': '1',
      '$rsg-heading-mobile-font-size': {
        h1: '30px',
        h2: '24px',
        h3: '20px',
        h4: '18px',
        h5: '16px',
        h6: '15px',
      },
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
  /** Level used to style heading. Can be: */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-heading-margin': PropTypes.string,
      '$rsg-heading-color': PropTypes.string,
      '$rsg-heading-padding': PropTypes.string,
      '$rsg-heading-mobile-line-height': PropTypes.string,
      '$rsg-heading-mobile-font-size': PropTypes.shape({
        h1: PropTypes.string,
        h2: PropTypes.string,
        h3: PropTypes.string,
        h4: PropTypes.string,
        h5: PropTypes.string,
        h6: PropTypes.string,
      }),
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */


const HeadingRendererUnstyled = (props) => {
  const {
    className,
    children,
    level,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  const Tag = typoList[`H${level}`] || H1;
  return (
    <Tag
      className={mapToCssModules(cn(className, 'rsg-heading', `h${level}`), cssModule)}
      {...attributes}
    >
      {children}
    </Tag>
  );
};

HeadingRendererUnstyled.defaultProps = defaultProps;
HeadingRendererUnstyled.propTypes = propTypes;

const HeadingRenderer = styled(HeadingRendererUnstyled)` 
  ${(props) => `
    &.rsg-heading {
      margin: ${props.theme.styleguide['$rsg-heading-margin']};
      color: ${props.theme.styleguide['$rsg-heading-color']};
      padding: ${props.theme.styleguide['$rsg-heading-padding']};
    }
  ${bp.up(
    'xs',
    props.theme['$grid-breakpoints'],
    `
      &.rsg-heading {
        line-height: ${props.theme.styleguide['$rsg-heading-line-height']};
      }
      &.rsg-heading.h1 {
        font-size: ${props.theme.styleguide['$rsg-heading-mobile-font-size'].h1};
      }
      &.rsg-heading.h2 {
        font-size: ${props.theme.styleguide['$rsg-heading-mobile-font-size'].h2};
      }
      &.rsg-heading.h3 {
        font-size: ${props.theme.styleguide['$rsg-heading-mobile-font-size'].h3};
      }
      &.rsg-heading.h4 {
        font-size: ${props.theme.styleguide['$rsg-heading-mobile-font-size'].h4};
      }
      &.rsg-heading.h5 {
        font-size: ${props.theme.styleguide['$rsg-heading-mobile-font-size'].h5};
        font-weight: 'bold',
      }
      &.rsg-heading.h6 {
        font-size: ${props.theme.styleguide['$rsg-heading-mobile-font-size'].h6};
        font-style: 'italic',
      }
    `
  )}
 `}
`;

HeadingRenderer.defaultProps = defaultProps;
HeadingRenderer.propTypes = propTypes;

/** @component */
export default HeadingRenderer;
