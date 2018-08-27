import { FETCH_USERS, DELETE_USER } from './Types';

export const fetchUsers = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => dispatch({
            type: FETCH_USERS,
            payload: users
        }));
}

export const deleteUser = (userId) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users/'+ userId, {
        method: 'DELETE'
    })
    .then(dispatch({
        type: DELETE_USER,
        payload: userId
    }))
}

