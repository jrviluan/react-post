import { combineReducers } from 'redux';
import postReducers from './PostReducers';

export default combineReducers({
    posts: postReducers
})