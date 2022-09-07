import { types } from "../types/types"


const inicitialState = {
    loading: false,
    msgError: null,
    users: []
}


export const uiReducer = (state=inicitialState, action) => {
    switch (action.type) {
        case types.uiSetError:
            return {
                ...state,
                msgError: action.payload
            }
         case types.getUsers:
            return {
                ...state,
                users: action.payload,
                loading: false
            }

        case types.uiRemoveError:
            return {
                ...state,
                msgError:null
            } 
            
            case types.uiStartLoading:
                return {
                    ...state,
                    loading: true
                } 
                
           case types.uiFinishLoading:
                 return {
                   ...state,
                   loading: false
                } 
    
        default:
            return state;
    }
 
}
