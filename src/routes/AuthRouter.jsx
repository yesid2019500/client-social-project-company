
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
// import { Route } from "react-router-dom/cjs/react-router-dom.min";


export const AuthRouter = () => {
  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <Switch>
              <Route exact path='/auth/login' component={LoginScreen} />
              <Route path='/auth/register' component={RegisterScreen} />
              <Redirect to='auth/login' />
          </Switch>
      </div>
    </div>
  )
}