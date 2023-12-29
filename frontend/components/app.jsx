import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthContainer from './auth/AuthContainer';
import Home from './Home';
import Profile from './Profile';
import Friends from './Friends';

const App = () => (
    <div>
        <Switch>
            <Route path='/' component={AuthContainer} />
            <Route path='/home' component={Home} />
            <Route path='/profile' component={Profile} />
            <Route path='/friends' component={Friends} />
        </Switch>
    </div>
);

export default App;