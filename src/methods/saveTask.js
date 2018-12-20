import fetchData from './fetchData';
const BACKEND_URL = 'https://uxcandy.com/~shapoval/test-task-backend/create?developer=Nina';

export default function saveTask(inp) {
  let { username, email, text } = inp;

  let data = new FormData();
  data.append("username", username);
  data.append("email", email);
  data.append("text", text);

  return fetchData(BACKEND_URL, {
    method: 'POST',
    body: data
  });
}
