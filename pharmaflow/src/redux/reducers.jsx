// reducers.js
import { combineReducers } from 'redux';


const counterReducer = (state = {state:true}, action) => {
  switch (action.type) {
    case 'login':
      return { ...state, S: true };
    case 'signup':
      return {...state, S: false};
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;