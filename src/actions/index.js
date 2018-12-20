export const changePage = (page) => {
  return {
    type: 'CHANGE_PAGE',
    page: page
  }
}

export const changeSortDir = (sd) => {
  return {
    type: 'CHANGE_SORT_DIRECTION',
    sort_direction: sd
  }
}

export const changeSortField = (field) => {
  return {
    type: 'CHANGE_SORT_FIELD',
    field: field
  }
}

export const nextPage = () => {
  return {
    type: 'NEXT_PAGE'
  }
}
export const prevPage = () => {
  return {
    type: 'PREV_PAGE'
  }
}

export const userLogIn = (name, pass) => {
  return {
    type: 'USER_LOGIN',
    name,
    pass
  }
}

export const userLogOut = () => {
  return {
    type: 'USER_LOGOUT'
  }
}

export function hasErrored(msg, e) {
  return {
    type: 'SERVER_MSG',
    serverStatus: msg,
    serverMsg: e
  };
}

export function serverMsg(err_string) {
  return {
    type: 'FIELD_INCORECT',
    errString: err_string
  };
}

export function isLoading(val) {
  return {
    type: 'IS_LOADING',
    isLoading: val
  };
}

export function get_tasks(data) {
  return {
      type: 'GET_TASKS',
      data: {
        tasks: data.message.tasks,
        total_task_count: parseInt(data.message.total_task_count, 10)
      }
  }
};

export const update = (val) => {
  return {
    type: 'UPDATE',
    upd: val
  }
}