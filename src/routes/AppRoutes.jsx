import React, { useEffect, useState } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";


import {firebase} from '../firebase/firebase-config'
// import { BlogScreen } from '../components/blog/BlogScreen';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { BlogScreen } from '../components/blog/BlogScreen';


export const AppRouter = () => {

const [ cheking,  setCheking ] = useState(true);
const [ isLoggedIn , setIsLoggedIn ] = useState(false)

const dispatch = useDispatch();


useEffect(() => {
 

  firebase.auth().onAuthStateChanged( async (user)=>{
     
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName, user.photoURL))
        setIsLoggedIn(true)

        

      }else{

        setIsLoggedIn(false)

      }
      setCheking(false)
  })

}, [dispatch, setCheking, setIsLoggedIn])

// si es true
if (cheking) {
  return ( 
    <h1 style={{color:'#ffffff'}} >Please Wait...</h1>
  )
}


  return (
       <Router>
         <div>
          <Switch>
                <PublicRoute path='/auth'
                 component={AuthRouter}
                 isAuthenticated={isLoggedIn}
                  />

                <PrivateRoute
                 exact
                 isAuthenticated={isLoggedIn}
                 path='/'
                 component={BlogScreen} />
                <Redirect to='auth/login' />
            </Switch>
         </div>
      </Router>
  )
}