import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import changePages from '../methods/changePages';

const mapStateToProps = (store) => {
  return {
    page: store.home.page,
    total_task_count: store.home.total_task_count,
    curent_page: store.home.curent_page,
    sort_direction: store.home.sort_direction,
    sort_field: store.home.sort_field
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: (field, new_page) => dispatch(changePages(field, new_page))
  }
}

class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      curent_page: this.props.page
    };
  }

  onChangeCountPage = (e) => {
    this.setState({ 
      curent_page: e.target.value 
    })
  }

  onFocusOutCountPage = (e) => {
    this.props.changePage({
      page: e.target.value,
      sort_direction: this.props.sort_direction,
      sort_field: this.props.sort_field
    });
  }

  onIncPage = () => {
    this.props.changePage({
      page: Number(this.props.page) + 1,
      sort_direction: this.props.sort_direction,
      sort_field: this.props.sort_field
    });
  }

  onDecPage = () => {
    if (this.props.page === 1) {
      return;
    }
    this.props.changePage({
      page: Number(this.props.page) - 1,
      sort_direction: this.props.sort_direction,
      sort_field: this.props.sort_field
    });
    }

  onForvard = () => {
    this.props.changePage({
      page: Math.ceil(this.props.total_task_count / 3),
      sort_direction: this.props.sort_direction,
      sort_field: this.props.sort_field
    });
  }

  onBack = () => {
    if (this.props.page === 1) {
      return;
    }
    this.props.changePage({
      page: 1,
      sort_direction: this.props.sort_direction,
      sort_field: this.props.sort_field
    });
  }

  render() {
    return (
      <div id="pagination">
        <button onClick={this.onBack} className="btn" type="button">
          start
        </button>
        <button onClick={this.onDecPage} className="btn" type="button">
          -
        </button>
        <input 
          type="text"
          id="page-inp"
          value={this.state.curent_page}
          onBlur={this.onFocusOutCountPage}
          onChange={this.onChangeCountPage}
          placeholder="type №"
        />
        <button onClick={this.onIncPage} className="btn" type="button">
          +
        </button>
        <button onClick={this.onForvard} className="btn" type="button">
          end
        </button>
      </div>
    );
  }
}

Pagination.propTypes = {
  page: PropTypes.number,
  total_task_count: PropTypes.number,
  curent_page: PropTypes.number,
  sort_direction:  PropTypes.string,
  sort_field: PropTypes.string,
  changePage: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);