import React from 'react';
import PropTypes from 'prop-types';
import Tr from '@bootstrap-styled/v4/lib/Table/Tr';

export function TableRowRenderer({ children }) {
  return <Tr>{children}</Tr>;
}
TableRowRenderer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TableRowRenderer;
