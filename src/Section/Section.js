import React from 'react';
import PropTypes from 'prop-types';
import Examples from 'react-styleguidist/lib/client/rsg-components/Examples';
import Components from 'react-styleguidist/lib/client/rsg-components/Components';
import Sections from 'react-styleguidist/lib/client/rsg-components/Sections';
import { DisplayModes } from 'react-styleguidist/lib/client/consts';
import SectionRenderer from './SectionRenderer';

export default function Section({ section, depth }, { displayMode, config: { pagePerSection } }) {
  const {
    name,
    slug,
    filepath,
    content,
    components,
    sections,
    description,
    exampleMode,
    usageMode,
  } = section;

  const contentJsx = content && (
    <Examples examples={content} name={name} exampleMode={exampleMode}/>
  );
  const componentsJsx = components && (
    <Components
      usageMode={usageMode}
      exampleMode={exampleMode}
      components={components}
      depth={depth + 1}
    />
  );
  const sectionsJsx = sections && <Sections sections={sections} depth={depth + 1}/>;

  return (
    <SectionRenderer
      description={description}
      pagePerSection={pagePerSection}
      name={name}
      slug={slug}
      filepath={filepath}
      content={contentJsx}
      components={componentsJsx}
      sections={sectionsJsx}
      isolated={displayMode !== DisplayModes.all}
      depth={depth}
    />
  );
}

Section.propTypes = {
  section: PropTypes.object.isRequired,
  depth: PropTypes.number.isRequired,
};

Section.contextTypes = {
  displayMode: PropTypes.string,
  config: PropTypes.object.isRequired,
};
