export default function error(state = {}, action) {
  switch (action.type) {
    case 'SERVER_MSG':
      return {
        ...state,
        serverStatus: action.serverStatus, 
        serverMsg: action.serverMsg
       };

    default:
      return state;
  }
}