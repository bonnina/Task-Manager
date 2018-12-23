import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { userLogOut } from '../actions/index';
import Username from './Username';

const mapStateToProps = (store) => {
  return {
    user_name: store.auth.userName,
    is_admin: store.auth.admin,
    is_loading: store.load
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogOut: () => {
      dispatch(userLogOut());
    }
  }
}

class Header extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div>
          <nav>
            <Link to='/'>
              <button className="btn">
                all
              </button>
            </Link>
            <Link to='/add'>
              <button className="btn">
                add
              </button>
            </Link>
            {this.props.is_admin 
            ? <button onClick={this.props.onLogOut} className="btn">
                log out
              </button>
            : <Link to='/log'>
                <button className="btn">
                  log in
                </button>
              </Link>
            }
            <span id="user">
              <Username user_name={this.props.user_name} />
            </span>
          </nav>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  user_name: PropTypes.string,
  is_admin: PropTypes.bool,
  is_loading: PropTypes.bool,
  onLogOut: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
