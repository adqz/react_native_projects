export default (state = null, action) => {
  // console.log(action);
  switch (action.type) {
    case 'select_library':
      return action.payload;
    
    default:
      return state;
  }
};

/*
NOTES
1. A reducer accepts two arguments as inputs - state and action
2. If state is undefined, we give it a value of null as all reducers are expected to have an initial state
3. We return the previous state if the type of action isn't what we expected
*/
