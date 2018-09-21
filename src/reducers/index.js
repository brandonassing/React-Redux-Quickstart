import { combineReducers } from 'redux'
import { toggleLogin, TOGGLE_LOGIN } from '../actions/index';

const initialState = {isLoggedIn : false};

export const userReducer = (state = initialState, action) => {
  switch(action.type){
    case TOGGLE_LOGIN:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn
      };
    default: return state;
  }
}
export const rootReducer = combineReducers({
  userReducer
});
