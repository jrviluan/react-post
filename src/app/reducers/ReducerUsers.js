import { FETCH_USERS, DELETE_USER } from '../actions/User/Types';

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action){
    switch(action.type){
       
        case FETCH_USERS:
            return {
                ...state,
                items: action.payload 
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

        default: 
            return state;
    }
}