import { FETCH_USERS, DELETE_USER, UPDATE_IS_ADD_USER, CREATE_USER, EDIT_USER, IS_EDIT_USER } from '../actions/User/Types';

const initialState = {
    users: [],
    user: {},
    isAdd: false,
    userDetails: {},
    isUpdate: false
}

export default function(state = initialState, action){
    switch(action.type){
       
        case FETCH_USERS:
            return {
                ...state,
                users: action.users,
                isAdd: state.isAdd
            }

        case CREATE_USER:
            return {
                ...state,
                user: action.payload
            }
        
        case EDIT_USER:
            const updatedUser = state.users.map(user => {
                if(user.id === action.user.id){
                    return { ...user, ...action.user }
                }
                return user
            })
            return { 
                ...state,
                users: updatedUser,
                isAdd: action.isAdd
            }

        
        case DELETE_USER:

            const newState = Object.assign([], state);
        
            const filteredUsers = newState.users.filter(users => {
                return users.id !== action.payload
            })
            
            return {
                ...state,
                users: filteredUsers
            }

        case UPDATE_IS_ADD_USER:
            return {
                ...state,
                isAdd: action.isAdd,
                userDetails: action.userDetails,
                isUpdate: action.isUpdate,
                user: {},
            }
            
        default: 
            return state;
    }
}