import { FETCH_USERS, DELETE_USER, UPDATE_IS_ADD_USER, CREATE_USER, EDIT_USER, IS_EDIT_USER } from './Types';

export const fetchUsers = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => dispatch({
            type: FETCH_USERS,
            users: users,
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

export const isAddUser = (isAdd, userDetails, isUpdate) => dispatch => {
    dispatch({
        type: UPDATE_IS_ADD_USER,
        isAdd: isAdd,
        userDetails: userDetails,
        isUpdate: isUpdate
    })
}

export const editUser = (user, isAdd) => dispatch => {
   
    fetch('https://jsonplaceholder.typicode.com/users/'+user.id, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(user => dispatch({
        type: EDIT_USER,
        user: user,
        isAdd: isAdd
    }))
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