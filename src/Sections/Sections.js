import React from 'react';
import PropTypes from 'prop-types';
import Section from 'react-styleguidist/lib/client/rsg-components/Section';
import SectionsRenderer from './SectionsRenderer';

export default function Sections({ sections, depth }) {
  return (
    <SectionsRenderer>
      {sections
        .filter((section) => !section.href)
        .map((section, idx) => (
          <Section key={idx} section={section} depth={depth}/> // eslint-disable-line react/no-array-index-key
        ))}
    </SectionsRenderer>
  );
}

Sections.propTypes = {
  sections: PropTypes.array.isRequired,
  root: PropTypes.bool, // eslint-disable-line
  depth: PropTypes.number.isRequired,
};
