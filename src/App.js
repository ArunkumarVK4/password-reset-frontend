import "./App.css";
import { Login } from "./Pages/login";
import { Register } from "./Pages/register";
import { ForgotPassword } from "./Pages/forgotPassword";
import { SecuredPage } from "./Pages/securedpage";
import { ResetPassword } from "./Pages/resetPassword";
import { Redirect, Route, Switch } from "react-router-dom";
import React from 'react';





function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/forgotPassword">
          <ForgotPassword />
        </Route>
        <Route path="/resetPassword/:id/:token">
          <ResetPassword />
        </Route>
        <Route exact path="/securedpage">
          <SecuredPage />
        </Route>
        <Route path="/">
          <Login />
          <Redirect to="/login" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
