import { combineReducers } from 'redux';
import postReducers from './PostReducers';
import userReducers from './ReducerUsers';

export default combineReducers({
    posts: postReducers,
    users: userReducers,
})