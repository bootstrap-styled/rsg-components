import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../Heading';

function MarkdownHeadingRenderer({ level, children }) {
  return (
    <div>
      <Heading level={level}>{children}</Heading>
    </div>
  );
}

MarkdownHeadingRenderer.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node, // eslint-disable-line react/require-default-props
};

export default MarkdownHeadingRenderer;
