import React from 'react';
import PropTypes from 'prop-types';
import Section from '@bootstrap-styled/v4/lib/Section';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';
import SectionHeading from 'react-styleguidist/lib/client/rsg-components/SectionHeading';
import Markdown from '../Markdown';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-section-margin': '60px 0 0 0',
      '$rsg-section-isolated-margin': '0',
    },
  },
};

/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Display heading section name. */
  name: PropTypes.string,
  /** Display section description used in `<Markdown />` component. */
  description: PropTypes.string,
  /** Display string containing special characters. */
  slug: PropTypes.string,
  /** Display section filepath. */
  filepath: PropTypes.string,
  /** Content element to be rendered. */
  content: PropTypes.node,
  /** Components elements to be rendered. */
  components: PropTypes.node,
  /** Sections elements to be rendered. */
  sections: PropTypes.node,
  /** Toggle isolated style. */
  isolated: PropTypes.bool,
  /** Set a one page per section. */
  pagePerSection: PropTypes.bool,
  /** Depth used in `<HeadingSection />` component. */
  depth: PropTypes.number.isRequired,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-section-margin': PropTypes.string,
      '$rsg-section-isolated-margin': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */

const SectionRendererUnstyled = (props) => {
  const {
    className,
    name,
    slug,
    content,
    components,
    sections,
    depth,
    isolated,
    description,
    pagePerSection,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <Section
      className={mapToCssModules(cn(className, 'rsg-section', { isolated }), cssModule)}
      {...attributes}
    >
      {name && (
        <SectionHeading
          depth={depth}
          id={slug}
          slotName="sectionToolbar"
          pagePerSection={pagePerSection}
          slotProps={props}
        >
          {name}
        </SectionHeading>
      )}
      {description && <Markdown text={description} />}
      {content}
      {sections}

      {components}
    </Section>
  );
};

SectionRendererUnstyled.defaultProps = defaultProps;
SectionRendererUnstyled.propTypes = propTypes;

const SectionRenderer = styled(SectionRendererUnstyled)` 
  ${(props) => `
    &.rsg-section {
      margin: ${props.theme.styleguide['$rsg-section-margin']};
    }
    &.rsg-section.isolated {
      margin: ${props.theme.styleguide['$rsg-section-isolated-margin']} !important;
    }
 `}
`;

SectionRenderer.defaultProps = defaultProps;
SectionRenderer.propTypes = propTypes;
/** @component */
export default SectionRenderer;
