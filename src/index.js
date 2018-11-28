/**
 * Code your first module here
 */
import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '@bootstrap-styled/v4/lib/Dropdown';

// eslint-disable-next-line react/prefer-stateless-function
export default class ReactDemo extends React.Component {
  static propTypes = {
    testProps: PropTypes.bool,
  }

  static defaultProps = {
    testProps: true,
  }

  render() {
    const { testProps, ...rest } = this.props;
    return (
      <Dropdown {...rest}>
        <div>
          Hello
          {testProps}
        </div>
      </Dropdown>
    );
  }
}
