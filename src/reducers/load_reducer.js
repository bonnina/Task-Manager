export default function load(state = false, action) {
  switch (action.type) {
    case 'IS_LOADING':
      return action.isLoading;

    default:
       return state;
  }
}