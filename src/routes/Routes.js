import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from '../pages/SignUp/SignUp';
import SignIn from '../pages/SignIn/SignIn';
import Home from '../pages/Home/Home';

export default function Routes() {
    return (
        <div>
              <main>
            <Switch>
                <Route path="/" component={SignIn} exact />
                <Route path="/signup" component={SignUp} />
                <Route path="/home" component={Home} />
                {/* <Route component={Error} /> */}
            </Switch>
        </main>
        </div>
    )
}
