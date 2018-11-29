import React from 'react';
import PropTypes from 'prop-types';

export default function ComponentsRenderer({ children }) {
  return <div>{children}</div>;
}
ComponentsRenderer.propTypes = {
  /** Specified node element will be passed as children of `<ComponentsRenderer />` component. */
  children: PropTypes.node.isRequired,
};
