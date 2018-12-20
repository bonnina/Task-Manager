import fetchData from './fetchData';
const BACKEND_URL = 'https://uxcandy.com/~shapoval/test-task-backend/?developer=Nina&page=';

export default function getTasks(fields) {
  let { page, sort_direction, sort_field } = fields;

  return fetchData(BACKEND_URL 
    + page
    + '&sort_direction=' + sort_direction
    + '&sort_field=' + sort_field
  );
}