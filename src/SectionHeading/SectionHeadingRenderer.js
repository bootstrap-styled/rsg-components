import React from 'react';
import PropTypes from 'prop-types';
import A from '@bootstrap-styled/v4/lib/A';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { hoverFocusActive } from '@bootstrap-styled/css-mixins/lib/hover';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules/lib';
import Heading from '../Heading';

export const defaultProps = {
  href: '#',
  theme: {
    styleguide: {
      '$rsg-section-heading-display': 'flex',
      '$rsg-section-heading-flex-direction': 'row',
      '$rsg-section-heading-align-items': 'center',
      '$rsg-section-heading-margin-bottom': '8px',
      '$rsg-section-heading-section-name-isolation': 'false',
      '$rsg-section-heading-section-name-text-decoration': 'underline',
      '$rsg-section-heading-section-name-cursor': 'pointer',
      '$rsg-section-heading-section-name-color': '#B31255',
      '$rsg-section-heading-anchor-font-size': '15px',
      '$rsg-section-heading-anchor-font-weight': 'normal',
      '$rsg-section-heading-anchor-transform': 'rotate(-5deg)',
      '$rsg-section-heading-anchor-color': '#CCCCCC',
      '$rsg-section-heading-anchor-padding': '6px 5px 0 0',
      '$rsg-section-heading-anchor-display': 'table-cell',
      '$rsg-section-heading-anchor-vertical-align': 'middle',
      '$rsg-section-heading-deprecated-text-decoration': 'line-through',
      '$rsg-section-heading-deprecated-cursor': '#767676',
      '$rsg-section-heading-toolbar-margin-left': 'auto',
      '$rsg-section-heading-1-link-color': '#292b2c',
      '$rsg-section-heading-2-link-color': '#767676',
    },
  },
};

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Specified node element will be passed as children of `<SectionHeadingRenderer />` component. */
  children: PropTypes.node, // eslint-disable-line react/require-default-props
  /** Toolbar element to be rendered. */
  toolbar: PropTypes.node, // eslint-disable-line react/require-default-props
  /** Set id used by `<Heading />` component. */
  id: PropTypes.string.isRequired,
  /** Set anchor link href used by `<A />` component. */
  href: PropTypes.string,
  /** Set level used in `<Heading />` component. */
  depth: PropTypes.number.isRequired,
  /** Toggle deprecated style. */
  deprecated: PropTypes.bool, // eslint-disable-line react/require-default-props
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-section-heading-display': PropTypes.string,
      '$rsg-section-heading-flex-direction': PropTypes.string,
      '$rsg-section-heading-align-items': PropTypes.string,
      '$rsg-section-heading-margin-bottom': PropTypes.string,
      '$rsg-section-heading-section-name-isolation': PropTypes.string,
      '$rsg-section-heading-section-name-text-decoration': PropTypes.string,
      '$rsg-section-heading-section-name-cursor': PropTypes.string,
      '$rsg-section-heading-section-name-color': PropTypes.string,
      '$rsg-section-heading-anchor-font-size': PropTypes.string,
      '$rsg-section-heading-anchor-font-weight': PropTypes.string,
      '$rsg-section-heading-anchor-transform': PropTypes.string,
      '$rsg-section-heading-anchor-color': PropTypes.string,
      '$rsg-section-heading-anchor-padding': PropTypes.string,
      '$rsg-section-heading-anchor-display': PropTypes.string,
      '$rsg-section-heading-anchor-vertical-align': PropTypes.string,
      '$rsg-section-heading-deprecated-text-decoration': PropTypes.string,
      '$rsg-section-heading-deprecated-cursor': PropTypes.string,
      '$rsg-section-heading-toolbar-margin-left': PropTypes.string,
      '$rsg-section-heading-1-link-color': PropTypes.string,
      '$rsg-section-heading-2-link-color': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};

const SectionHeadingRendererUnstyled = (props) => {
  const {
    className,
    cssModule,
    children,
    toolbar,
    id,
    href,
    depth,
    deprecated,
    ...attributes
  } = omit(props, ['theme', 'slotProps', 'pagePerSection', 'slotName']);

  const headingLevel = Math.min(6, depth);
  return (
    <div
      className={mapToCssModules(cn(className, 'rsg-section-heading'), cssModule)}
      {...attributes}
    >
      <Heading level={headingLevel} id={id}>
        <A className={`section-name level-${headingLevel} ${deprecated ? 'deprecated' : ''} d-flex justify-content-between`} href={href}>
          <div className="no-print">
            <FontAwesomeIcon
              className="anchor"
              icon={['fas', 'link']}
            />
          </div>
          {children}
        </A>
      </Heading>
      <div className="toolbar">{toolbar}</div>
    </div>
  );
};

SectionHeadingRendererUnstyled.defaultProps = defaultProps;
SectionHeadingRendererUnstyled.propTypes = propTypes;

const SectionHeadingRenderer = styled(SectionHeadingRendererUnstyled)` 
  ${(props) => `
    &.rsg-section-heading {
      display: ${props.theme.styleguide['$rsg-section-heading-display']};
      flex-direction: ${props.theme.styleguide['$rsg-section-heading-flex-direction']};
      align-items: ${props.theme.styleguide['$rsg-section-heading-align-items']};
      margin-bottom: ${props.theme.styleguide['$rsg-section-heading-margin-bottom']};
      & .section-name {
  ${hoverFocusActive(props.theme['$enable-hover-media-query'],
    `
      isolation: ${props.theme.styleguide['$rsg-section-heading-section-name-isolation']};
      text-decoration: ${props.theme.styleguide['$rsg-section-heading-section-name-text-decoration']};
      cursor: ${props.theme.styleguide['$rsg-section-heading-section-name-cursor']};
      color: ${props.theme.styleguide['$rsg-section-heading-section-name-color']};
      .anchor {
        color: ${props.theme.styleguide['$rsg-section-heading-section-name-color']};
      }
    `)}
        .anchor {
          font-size: ${props.theme.styleguide['$rsg-section-heading-anchor-font-size']};
          font-weight: ${props.theme.styleguide['$rsg-section-heading-anchor-font-weight']};
          transform: ${props.theme.styleguide['$rsg-section-heading-anchor-transform']};
          color: ${props.theme.styleguide['$rsg-section-heading-anchor-color']};
          padding: ${props.theme.styleguide['$rsg-section-heading-anchor-padding']};
          display: ${props.theme.styleguide['$rsg-section-heading-anchor-display']};
          vertical-align: ${props.theme.styleguide['$rsg-section-heading-anchor-vertical-align']};
        }
      }
      & .deprecated {
        cursor: ${props.theme.styleguide['$rsg-section-heading-deprecated-cursor']};
        &, &:hover {
          text-decoration: ${props.theme.styleguide['$rsg-section-heading-deprecated-text-decoration']};

        }
      }
      & .toolbar {
        margin-left: ${props.theme.styleguide['$rsg-section-heading-toolbar-margin-left']};
      }
      & .level-1 {
        color: ${props.theme.styleguide['$rsg-section-heading-1-color']};
      }
      & .level-2 {
        color: ${props.theme.styleguide['$rsg-section-heading-2-color']};
      }
    }
 `}
`;

SectionHeadingRenderer.defaultProps = defaultProps;
SectionHeadingRenderer.propTypes = propTypes;
/** @component */
export default SectionHeadingRenderer;
