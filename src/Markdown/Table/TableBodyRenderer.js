import React from 'react';
import PropTypes from 'prop-types';
import Tbody from '@bootstrap-styled/v4/lib/Table/Tbody';

export function TableBodyRenderer({ children }) {
  return <Tbody>{children}</Tbody>;
}
TableBodyRenderer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TableBodyRenderer;
