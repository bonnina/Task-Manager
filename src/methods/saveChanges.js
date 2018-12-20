import md5 from 'md5';
import fetchData from './fetchData';
const BACKEND_URL = 'https://uxcandy.com/~shapoval/test-task-backend/edit/';

export default function saveChanges(fields) {
  let { status, task, id } = fields;

  let str = "status=" + status + "&text=" + encodeURIComponent(task) + "&token=beejee";
  let str_md5 = md5(str);

  let data = new FormData();
  data.append("status", status);
  data.append("text", encodeURIComponent(task));
  data.append("token", "beejee");
  data.append("signature", str_md5);

  return fetchData(BACKEND_URL + id + 'id?developer=Nina', { 
    method: 'POST', 
    body: data 
  });
}
