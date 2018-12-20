const user = {
  userName: "guest",
  login: "",
  pass: "",
  admin: false
};

export default function auth(state = user, action) {
  switch (action.type) {
    case 'USER_LOGIN':
      if (action.name === 'admin' && action.pass === "123") {
        return {
          userName: "admin",
          login: "admin",
          pass: "123",
          admin: true
        }
      }
      return state;

    case 'USER_LOGOUT':  
      return user;

    default:
      return state;
  }
}