import { get_tasks, serverMsg, isLoading, hasErrored } from '../actions/index';
import getTasks from './getTasks';

export default function fetchData(url, params = {}) {
  return (dispatch, getState) => {
    dispatch(isLoading(true));
      let handler;
      let method = params ? params.method : 'GET';
      switch (method) {
        case 'POST':
          handler = fetchCreateSuccess;
          break;
        default:
          handler = fetchDataSuccess;
      };

      let emit_handler = (handler_func) => {
        fetch(url, {
          method: 'GET',
          ...params
          })
          .then((response) => {
            dispatch(isLoading(false));
            return response;
          })
          .then((response) => response.json())
          .then((data) => handler_func(dispatch, data, getState))
          .catch((e) => dispatch(hasErrored(1, e)) );
        }
      emit_handler(handler);
  };
}

function fetchDataSuccess(dispatch, data) {
  dispatch(get_tasks(data));
}

function fetchCreateSuccess(dispatch, data, getState) {
  if (data.status === "ok") {
    dispatch(hasErrored(2, "task successfully added"));

    let { home: store } = getState();
    let fields = {
      page: store.page,
      sort_direction: store.sort_direction,
      sort_field: store.sort_field
    };

    dispatch(getTasks(fields));
    return;
  } else if (data.status === "error") {
    dispatch(serverMsg(data.message));
  }
}