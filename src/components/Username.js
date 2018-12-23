import React from 'react';
import PropTypes from 'prop-types';

class Username extends React.Component {
  render() {
    return (
      <span id="username">
        {this.props.user_name}
      </span>
    )
  }
}

Username.propTypes = {
  user_name: PropTypes.string,
}

export default Username;