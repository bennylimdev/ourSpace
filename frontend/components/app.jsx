import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Splash from './Splash';
import AuthContainer from './auth/AuthContainer';
import Home from './Home';
import Profile from './Profile';
import Friends from './Friends';

const App = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Splash} />
            <Route path='/register' component={AuthContainer} />
            <Route path='/home' component={Home} />
            <Route path='/profile' component={Profile} />
            <Route path='/friends' component={Friends} />
        </Switch>
    </div>
);

export default App;