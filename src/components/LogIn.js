import React from 'react';
import { connect } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Redirect } from 'react-router';
import { userLogIn } from '../actions/index';
import sanitize from '../methods/sanitize';

const mapStateToProps = (store) => {
  return {
    log_in: store.auth.admin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (name, pass) => {
       dispatch(userLogIn(name, pass));
    }
  }
}

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      modal: false,
      name: "",
      pass: ""
    };

    this.onChangeName = (e) => { 
      this.setState({ 
        name: sanitize(e.target.value) 
      }) 
    };
    this.onChangePass = (e) => { 
      this.setState({ 
        pass: sanitize(e.target.value)
      }) 
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  userLogin = () => {
    let name = sanitize(document.getElementById("name").value);
    let pass = sanitize(document.getElementById("pass").value);
    if (name && pass) {
      this.props.userLogin(this.state.name, this.state.pass);
    } else {
      this.toggle();
    }
  }

  render() {
    if (this.props.log_in) {
      return <Redirect to="/" />
    }

    return (
      <div className="forms">
        <div className="row">
          <label> username: </label>
          <div>
            <input 
              type="text" 
              id="name" 
              value={this.state.name} 
              onChange={this.onChangeName} 
            />
          </div>
        </div>
        <div>
          <label className="col-2"> password: </label>
            <input 
              className="form-control" 
              type="password" 
              id="pass" 
              value={this.state.pass} 
              onChange={this.onChangePass} 
            />
        </div>
        <div className="add">
          <Button onClick={() => { this.userLogin() }} >
            log in
          </Button>
          <Modal 
            className="mod"
            isOpen={this.state.modal} 
            toggle={this.toggle} 
          >
            <ModalHeader toggle={this.toggle}> error </ModalHeader>
            <ModalBody>
              please, fill in all fields
            </ModalBody>
            <ModalFooter>
              <Button onClick={this.toggle}> ok </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);