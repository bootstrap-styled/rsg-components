import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import bp from '@bootstrap-styled/css-mixins/lib/breakpoints';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';
import Heading from '../../Heading';

const propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node.isRequired,
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
  /** @ignore */
  className: PropTypes.string,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-markdown-heading-color': PropTypes.string,
      '$rsg-markdown-heading-line-height': PropTypes.string,
      '$rsg-markdown-heading-font-size': PropTypes.shape({
        h1: PropTypes.string,
        h2: PropTypes.string,
        h3: PropTypes.string,
        h4: PropTypes.string,
        h5: PropTypes.string,
        h6: PropTypes.string,
      }),
      '$rsg-markdown-heading-mobile-line-height': PropTypes.string,
      '$rsg-markdown-heading-mobile-font-size': PropTypes.shape({
        h1: PropTypes.string,
        h2: PropTypes.string,
        h3: PropTypes.string,
        h4: PropTypes.string,
        h5: PropTypes.string,
        h6: PropTypes.string,
      }),
      '$rsg-markdown-heading-font-weight': PropTypes.shape({
        h1: PropTypes.string,
        h2: PropTypes.string,
        h3: PropTypes.string,
        h4: PropTypes.string,
        h5: PropTypes.string,
        h6: PropTypes.string,
      }),
    }),
  }),
};

const defaultProps = {
  cssModule: null,
  className: undefined,
  theme: {
    styleguide: {
      '$rsg-markdown-heading-line-height': '1',
      '$rsg-markdown-heading-font-size': {
        h1: '30px',
        h2: '28px',
        h3: '26px',
        h4: '24px',
        h5: '22px',
        h6: '20px',
      },
      '$rsg-markdown-heading-margin': '0',
      '$rsg-markdown-heading-color': '#383b3d',
      '$rsg-markdown-heading-padding': '20px 0 15px 0',
      '$rsg-markdown-heading-mobile-line-height': '1',
      '$rsg-markdown-heading-mobile-font-size': {
        h1: '28px',
        h2: '26px',
        h3: '24px',
        h4: '22px',
        h5: '20px',
        h6: '18px',
      },
      '$rsg-markdown-heading-font-weight': {
        h1: '300',
        h2: '300',
        h3: '300',
        h4: '300',
        h5: '300',
        h6: '300',
      },
    },
  },
};

function MarkdownHeadingRenderer({ level, className, children, cssModule }) {
  return (
    <Heading
      level={level}
      className={mapToCssModules(cn(className, 'rsg-markdown-heading'), cssModule)}
    >
      {children}
    </Heading>
  );
}

MarkdownHeadingRenderer.propTypes = propTypes;
MarkdownHeadingRenderer.defaultProps = defaultProps;

const StyledMarkdownHeadingRenderer = styled(MarkdownHeadingRenderer)`${(props) => `
  &.rsg-markdown-heading {
    &.rsg-markdown-heading {
      color: ${props.theme.styleguide['$rsg-markdown-heading-color']};
    }
    ${bp.up(
    'xs',
    props.theme['$grid-breakpoints'],
    `
      &.rsg-markdown-heading {
        line-height: ${props.theme.styleguide['$rsg-markdown-heading-mobile-line-height']};
      }
      &.rsg-markdown-heading.h1 {
        font-size: ${props.theme.styleguide['$rsg-markdown-heading-mobile-font-size'].h1};
        font-weight: ${props.theme.styleguide['$rsg-markdown-heading-font-weight'].h1};
      }
      &.rsg-markdown-heading.h2 {
        font-size: ${props.theme.styleguide['$rsg-markdown-heading-mobile-font-size'].h2};
        font-weight: ${props.theme.styleguide['$rsg-markdown-heading-font-weight'].h2};
      }
      &.rsg-markdown-heading.h3 {
        font-size: ${props.theme.styleguide['$rsg-markdown-heading-mobile-font-size'].h3};
        font-weight: ${props.theme.styleguide['$rsg-markdown-heading-font-weight'].h3};
      }
      &.rsg-markdown-heading.h4 {
        font-size: ${props.theme.styleguide['$rsg-markdown-heading-mobile-font-size'].h4};
        font-weight: ${props.theme.styleguide['$rsg-markdown-heading-font-weight'].h4};
      }
      &.rsg-markdown-heading.h5 {
        font-size: ${props.theme.styleguide['$rsg-markdown-heading-mobile-font-size'].h5};
        font-weight: ${props.theme.styleguide['$rsg-markdown-heading-font-weight'].h5};
      }
      &.rsg-markdown-heading.h6 {
        font-size: ${props.theme.styleguide['$rsg-markdown-heading-mobile-font-size'].h6};
        font-weight: ${props.theme.styleguide['$rsg-markdown-heading-font-weight'].h6};
        font-style: 'italic';
      }
    `
  )}
 
  ${bp.up(
    'md',
    props.theme['$grid-breakpoints'],
    `
      &.rsg-markdown-heading {
        line-height: ${props.theme.styleguide['$rsg-markdown-heading-line-height']};
      }
      &.rsg-markdown-heading.h1 {
        font-size: ${props.theme.styleguide['$rsg-markdown-heading-font-size'].h1};
        font-weight: ${props.theme.styleguide['$rsg-markdown-heading-font-weight'].h1};
      }
      &.rsg-markdown-heading.h2 {
        font-size: ${props.theme.styleguide['$rsg-markdown-heading-font-size'].h2};
        font-weight: ${props.theme.styleguide['$rsg-markdown-heading-font-weight'].h2};
      }
      &.rsg-markdown-heading.h3 {
        font-size: ${props.theme.styleguide['$rsg-markdown-heading-font-size'].h3};
        font-weight: ${props.theme.styleguide['$rsg-markdown-heading-font-weight'].h3};
      }
      &.rsg-markdown-heading.h4 {
        font-size: ${props.theme.styleguide['$rsg-markdown-heading-font-size'].h4};
        font-weight: ${props.theme.styleguide['$rsg-markdown-heading-font-weight'].h4};
      }
      &.rsg-markdown-heading.h5 {
        font-size: ${props.theme.styleguide['$rsg-markdown-heading-font-size'].h5};
        font-weight: ${props.theme.styleguide['$rsg-markdown-heading-font-weight'].h5};
      }
      &.rsg-markdown-heading.h6 {
        font-size: ${props.theme.styleguide['$rsg-markdown-heading-font-size'].h6};
        font-weight: ${props.theme.styleguide['$rsg-markdown-heading-font-weight'].h6};
        font-style: 'italic';
      }
    `
  )}}
 `}
`;

StyledMarkdownHeadingRenderer.propTypes = propTypes;
StyledMarkdownHeadingRenderer.defaultProps = defaultProps;

export default StyledMarkdownHeadingRenderer;
