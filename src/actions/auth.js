import { types } from "../types/types";
import Swal from 'sweetalert2';
import {firebase, googleAuthProvider} from '../firebase/firebase-config';


import { finishLoading, uiStartLoading } from './ui';


export const startLoginEmailPassword = (email, password) => {
    return (dispatch)=> {

   dispatch(uiStartLoading())
        
 firebase.auth().signInWithEmailAndPassword(email, password)
 .then(({user}) => {
     dispatch(login(user.uid, user.displayName))
     dispatch(finishLoading())
  }).catch( err => {
      console.log(err)
      dispatch(finishLoading())
      Swal.fire('Error', err.message, 'error');
     })

 }
}


export const startRegisterWithEmailPassword = (email,password,name) => {
    return ( dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async ({user}) => {
          await user.updateProfile({displayName: name })
      
            dispatch(
                login(user.uid, user.displayName)
                
            )
         }).catch( err => {
             console.log(err)
             Swal.fire('Error', err.message, 'error');
         })

    }
}



export const startGoogleLogin = () => {
        return ( dispatch )=> {
            firebase.auth().signInWithPopup(googleAuthProvider)
   
                .then(({user}) => {
                    console.log(user)
                   dispatch(
                    login(user.uid, user.displayName)
                   )
                })
        }
    }


export const login = (uid, displayName,photoURL) => ({
        type: types.login, 
           payload: {
               uid,
               displayName,
               photoURL     
       }
   })


   export const noteLogout = () => ({
    type: types.notesLogoutCleaning
})


   export const startLogout = () => {
    return async (dispatch) => {
       await firebase.auth().signOut();
       dispatch(logout())
        dispatch(noteLogout())

    }
}



export const logout = () => ({
    type:types.logout
})