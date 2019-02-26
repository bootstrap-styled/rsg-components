import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import getUrl from 'react-styleguidist/lib/client/utils/getUrl';
import ToolbarButton from '../ToolbarButton';

const IsolateButton = ({ name, example, isolated }) =>
  isolated ? (
    <ToolbarButton href={getUrl({ anchor: true, slug: '/' })} title="Show all components">
      <FontAwesomeIcon icon={['fas', 'angle-double-left']} />
    </ToolbarButton>
  ) : (
    <ToolbarButton href={getUrl({ name, example, isolated: true })} title="Open isolated">
      <FontAwesomeIcon icon={['fas', 'arrows-alt']} />
    </ToolbarButton>
  );

IsolateButton.propTypes = {
  name: PropTypes.string.isRequired,
  example: PropTypes.number, // eslint-disable-line react/require-default-props
  isolated: PropTypes.bool, // eslint-disable-line react/require-default-props
};

export default IsolateButton;
