// import { METHODS } from "http";
import { types } from "../types/types";


export const getUsersBlog = (users) => ({
    type: types.getUsers,
    payload:users
})

export const loadUsers = () => {
    return async ( dispatch)=> {
        const api = await fetch(`https://red-social-client-app.herokuapp.com/api/empleados`, {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
        })

        const response = await api.json()
         dispatch(getUsersBlog(response.empleados))
        // console.log(response.empleados);
    }
}


export const setError = (err) => ({
    type: types.uiSetError,
    payload: err
})

export const uiRemoveError = () => ({
    type: types.uiRemoveError
})

export const uiStartLoading = () => ({
    type: types.uiStartLoading
})


export const finishLoading = () => ({
    type: types.uiFinishLoading
})