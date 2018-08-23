import { FETCH_USERS } from './Types';

export const fetchUsers = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => dispatch({
            type: FETCH_USERS,
            payload: users
        }));
}