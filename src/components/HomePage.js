import React from 'react';
import { connect } from 'react-redux'
import getTasks from '../methods/getTasks';
import saveChanges from '../methods/saveChanges';
import changePages from '../methods/changePages';
import Task from './Task';
import Pagination from './Pagination';

const mapStateToProps = (store) => {
  return {
    admin: store.auth.admin,
    isLoading: store.load,
    page: store.home.page,
    tasks: store.home.tasks,
    total_task_count: store.home.total_task_count,
    curent_page: store.home.curent_page,
    sort_direction: store.home.sort_direction,
    sort_field: store.home.sort_field
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetch: (data, mode) => {
      if (mode) {
        dispatch(saveChanges(data));
      } else {
          dispatch(getTasks(data));
        }
    },
    changePage: (field, new_page) => dispatch(changePages(field, new_page))
  }
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      curent_page: this.props.page
    };
  }
    
  componentDidMount() {
    this.getTasks();
  }

  getTasks = () => {
    this.props.onFetch({
      page: this.props.page,
      sort_direction: this.props.sort_direction,
      sort_field: this.props.sort_field
    });
  }

  onChangeSort = (val) => {
    let field_setting = {
      page: this.props.page,
      sort_direction: this.props.sort_direction,
      sort_field: this.props.sort_field
    };

    if (this.props.sort_field === val) {
      this.props.sort_direction === 'asc'
      ?  field_setting.sort_direction = 'desc'
      :  field_setting.sort_direction = 'asc'
    } else {
        field_setting.sort_field = val;
      }
    this.props.changePage(field_setting);
  }

    render() {
      let tasks = [];
      let item;

      if (this.props.tasks) {
        for (let i = 0; i < this.props.tasks.length; i++) {
          item = this.props.tasks[i];
          tasks.push(
            <Task
              key={item.id}
              task={item}
              onFetch={this.props.onFetch}
              admin={this.props.admin}
            />
          );
        }
      }

      return (
        <div>
          <div className="row">
            <table className="table">
              <thead>
                <tr>
                  <th onClick={() => this.onChangeSort('username')}> username </th>
                  <th onClick={() => this.onChangeSort('email')}> email </th>
                  <th> task </th>
                  <th> edit </th>
                  <th onClick={() => this.onChangeSort('status')}> done </th>
                </tr>
              </thead>
              <tbody>
                {tasks}
              </tbody>
            </table>
          </div>
          <Pagination />
        </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);