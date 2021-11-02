import { combineReducers } from 'redux';
import postReducer from './postReducer';
import usersReducer from './usersReducer';
import searchReducer from './searchReducer';
import setKeywordReducer from './setKeywordReducer';

export default combineReducers({
    posts: postReducer,
    users: usersReducer,
    setKeyword: setKeywordReducer,
    search: searchReducer,
});