import React from 'react';
import { Button, FormGroup, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      task: this.props.task,
      status: this.props.status
    };
  }

    onCheck = ({ target: { checked } }) => {
      this.setState({ 
        status: checked ? 10 : 0 
      });
    };

    toggle = () => {
      this.setState({
        modal: !this.state.modal
      });
    }

    save = () => {
      this.props.onFetch({
        status: this.state.status,
        task: this.state.task,
        id: this.props.id
      }, true);

      this.toggle();
    };

    onChangeText = (e) => { 
      this.setState({ 
        task: e.target.value 
      }) 
    }

    render() {
      return (
        <div>
          <Button 
            disabled={!this.props.admin} 
            onClick={this.toggle}>
            {this.props.buttonLabel}
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className="mod"
          >
            <ModalHeader toggle={this.toggle}> edit task </ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label for="newTask"> new task: </Label>
                <Input 
                  value={this.state.task} 
                  type="text" 
                  name="email" 
                  id="newTask" 
                  onChange={this.onChangeText} 
                />
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input 
                    checked={this.state.status === 10} 
                    onChange={this.onCheck} 
                    type="checkbox" 
                  /> check done
                </Label>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button onClick={this.save}> save </Button>{' '}
              <Button onClick={this.toggle}> cancel </Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
}

export default Admin;