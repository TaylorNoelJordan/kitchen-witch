import { combineReducers } from 'redux';
import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';
import { recipesReducer } from './recipesReducer';

const rootReducer = combineReducers({
    error: errorReducer,
    loading: loadingReducer,
    recipes: recipesReducer
})

export default rootReducer;