import { FETCH_USERS, DELETE_USER, UPDATE_IS_ADD_USER, CREATE_USER } from '../actions/User/Types';

const initialState = {
    items: [],
    item: {},
    isAddUser: false
}

export default function(state = initialState, action){
    switch(action.type){
       
        case FETCH_USERS:
            return {
                ...state,
                items: action.payload 
            }

        case CREATE_USER:
            return {
                ...state,
                item: action.payload
            }
        
        case DELETE_USER:

            const newState = Object.assign([], state);
        
            const filteredUsers = newState.items.filter(users => {
                return users.id !== action.payload
            })
            
            return {
                ...state,
                items: filteredUsers
            }

        case UPDATE_IS_ADD_USER:

            return {
                ...state,
                isAddUser: action.payload
            }
            
        default: 
            return state;
    }
}