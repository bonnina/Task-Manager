import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import sanitize from '../methods/sanitize';
import saveTask from '../methods/saveTask'

const mapStateToProps = (store, ownProps) => {
  return {
    isLoading: store.load,
    err_status: store.home.err_status,
    err_string: store.home.err_string,
    sin_err_status: store.error.serverStatus,
    sin_err_string: store.error.serverMsg
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetch: (data) => {
      dispatch(saveTask(data)); 
    }
  }
}

class AddTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      email: '',
      task: '',
      sin_err_status: this.props.sin_err_status,
    };
    this.err_status = this.props.err_status;
    }

    handleChange = ({ target: { name, value } }) => {
      this.setState({ [name]: value });
    }

    fetchData = () => {
      let data = {
        username: sanitize(this.state.user),
        email: this.state.email,
        text: sanitize(this.state.task)
      };
      this.props.onFetch(data);
    }

    errorMsg = () => {
      let msg = "";
      if (this.props.sin_err_status) {
        msg = msg + " " + this.props.sin_err_string;
      } else if (this.props.err_status !== this.err_status) {
          this.err_status = this.props.err_status;
          for (let item in this.props.err_string) {
            msg = msg + item + " - " + this.props.err_string[item] + ", ";
          }
          msg = msg.substring(0, msg.length - 2);
        }

        if (msg.length) {
          return (
            <div>
              {this.props.sin_err_status !== 2 
              ? <div>
                  <h4 className="text-color-error-header"> error </h4>
                    <h5 className="text-color-error"> {msg} </h5>
                </div>
              : <div>
                  <h4 className="text-color-corect-header"> info </h4>
                    <h5 className="text-color-corect"> {msg} </h5>
                </div>
              }
            </div >
          )
        }
    }

    render() {
      return (
        <div className="container">
          <div className="row">
            {<div> {this.errorMsg()} </div>}
          </div>
          <div className="forms">
            <div className="row">
              <label> username: </label>
              <div className="col-3">
                <input 
                  required
                  className="form-control" 
                  type="text"
                  name="user" 
                  value={this.state.user} 
                  onChange={this.handleChange} 
                />
              </div>
            </div>
            <div className="row">
              <label> еmail: </label>
              <div className="col-3">
                <input 
                  required
                  className="form-control" 
                  type="email" 
                  name="email" 
                  value={this.state.email} 
                  onChange={this.handleChange} 
                />
              </div>
            </div>
            <div className="row m-2">
              <label> task: </label>
              <div className="col-3">
                <input 
                  required
                  className="form-control" 
                  type="text"  
                  name="task" 
                  value={this.state.task} 
                  onChange={this.handleChange} 
                />
              </div>
            </div>
            <div className="add">
              <Button  onClick={this.fetchData}>
                add
              </Button>
            </div>
          </div>
        </div>
      )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);