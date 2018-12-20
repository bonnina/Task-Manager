export default function home(state = {}, action) {
  switch (action.type) {
    case 'GET_TASKS':
      return Object.assign({}, state, action.data);

    case 'CHANGE_PAGE':
      return {
        ...state,
        page: action.page
        };

      case 'CHANGE_SORT_DIRECTION':
        return {
          ...state,
          sort_direction: action.sort_direction
          };

      case 'CHANGE_SORT_FIELD':
        return {
          ...state,
          sort_field: action.field
          };

      case 'NEXT_PAGE':
        return {
          ...state,
          curent_page: state.curent_page++
          };

      case 'PREV_PAGE':
        return {
          ...state,
          curent_page: state.curent_page--
          };

      case 'FIELD_INCORECT':  
        return Object.assign({}, state, {
          err_status: state.err_status + 1,
          err_string: action.errString
        });

      case 'UPDATE':
        return {
          ...state,
          update: action.upd
          };

      default:
        return state;
  }
}