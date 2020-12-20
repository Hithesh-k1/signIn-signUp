import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import Home from "../pages/Home/Home";
import { AuthContext } from "../context/Auth";
import PrivateRoute from "./PrivateRoute";

export default function Routes() {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <div>
      <main>
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
          <Switch>
            <Route path="/" component={SignIn} exact />
            <Route path="/signup" component={SignUp} />
            <PrivateRoute path="/home" component={Home} />
            {/* <Route path='*' component={PageNotFound} /> */}

            {/* <Route component={Error} /> */}
          </Switch>
        </AuthContext.Provider>
      </main>
    </div>
  );
}
