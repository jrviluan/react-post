import { FETCH_POSTS, NEW_POST, UPDATE_POST, DELETE_POST } from '../actions/Post/Types';

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }

        case NEW_POST: 
            return {
                ...state,
                item: action.payload
            }
           
        case UPDATE_POST:
        
            const updatedItems = state.items.map(item => {
                if(item.id === action.payload.id){
                    return { ...item, ...action.payload }
                }
                return item
            })
            return { 
                ...state,
                items: updatedItems 
            }
        
        case DELETE_POST:{
            const newState = Object.assign([], state);

            const filteredItems = newState.items.filter(items => {
                return items.id !== action.payload;
            });
          
            return { 
                ...state,
                items: filteredItems 
            }
        }

        default:
            return state;
    }
}