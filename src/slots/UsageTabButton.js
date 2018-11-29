import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';
import TabButton from '../TabButton';

const UsageTabButton = (props) => {
  const component = props.props;
  const showButton = !isEmpty(component.props) || !isEmpty(component.methods);
  return showButton ? <TabButton {...props}>Props & methods</TabButton> : null;
};

UsageTabButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  props: PropTypes.shape({
    props: PropTypes.array,
    methods: PropTypes.array,
  }).isRequired,
  active: PropTypes.bool, // eslint-disable-line react/require-default-props
};

export default UsageTabButton;
