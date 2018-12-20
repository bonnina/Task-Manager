import React from 'react';

class Username extends React.Component {
  render() {
    return (
      <span id="username">
        {this.props.user_name}
      </span>
    )
  }
}

export default Username;