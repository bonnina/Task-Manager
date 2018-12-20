import fetchData from './fetchData';
import { changePage, changeSortDir, changeSortField } from '../actions/index';
const BACKEND_URL = 'https://uxcandy.com/~shapoval/test-task-backend/?developer=Nina&page=';

export default function changePages(fields) {
  let { page, sort_direction, sort_field } = fields;

  return (dispatch, getState) => {
    let { home: store } = getState();
      if (store.page !== page) {
        dispatch(changePage(page));
      }
      if (store.sort_direction !== sort_direction) {
        dispatch(changeSortDir(sort_direction));
      }
      if (store.sort_field !== sort_field) {
        dispatch(changeSortField(sort_field));
      }

      dispatch(fetchData(BACKEND_URL 
        + page
        + '&sort_direction=' + sort_direction
        + '&sort_field=' + sort_field
      ));
  }
}
