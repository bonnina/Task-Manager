import React from 'react';
import Admin from './Admin';

class Task extends React.Component {
  render() {
    return (
      <tr>
          <td className='taskText'>{this.props.task.username}</td>
          <td>{this.props.task.email}</td>
          <td className='taskText task'>{this.props.task.text}</td>
          <td className='center'>
            <Admin buttonLabel={"edit"}
              task={this.props.task.text}
              id={this.props.task.id}
              status={this.props.task.status}
              onFetch={this.props.onFetch}
              admin={this.props.admin}
            />
          </td>
          <td className="center">
            <div>
              <input 
                disabled="1" 
                type="checkbox" 
                checked={this.props.task.status === 10} 
                className="custom-control-input" 
                id={"customCheck_" + this.props.task.id} 
              />
              <label 
                className="custom-control-label" 
                htmlFor={"customCheck_" + this.props.task.id}>
              </label>
            </div>
          </td>
        </tr>
      );
    }
}

export default Task;