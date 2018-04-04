import { combineReducers } from 'redux'
import { addArticle, ADD_ARTICLE } from '../actions/index';

const initialState = {articles : []};
export const testReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, action.payload]
      };
    default: return state;
  }
}
export const rootReducer = combineReducers({
  testReducer
});

