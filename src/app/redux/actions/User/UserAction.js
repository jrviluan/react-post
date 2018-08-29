import { FETCH_USERS, DELETE_USER, UPDATE_IS_ADD_USER, CREATE_USER } from './Types';

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

export const updateAddUser = (boolean) => dispatch => {
    dispatch({
        type: UPDATE_IS_ADD_USER,
        payload: boolean
    })
}

export const createUser = (userData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users/', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(user => dispatch({
        type: CREATE_USER,
        payload: user
    }))
}