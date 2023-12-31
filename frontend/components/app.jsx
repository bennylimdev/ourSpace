import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import AuthContainer from './auth/AuthContainer';
import Home from './Home';
import Profile from './Profile';
import Friends from './Friends';
import ModalContainer from './modal/ModalContainer';

const App = () => {

    return (
    <div>
        <ModalContainer />
        <Switch>
            <AuthRoute exact path='/' component={AuthContainer} />
            <ProtectedRoute path='/home' component={Home} />
            <ProtectedRoute path='/profile' component={Profile} />
            <ProtectedRoute path='/friends' component={Friends} />
        </Switch>
    </div>
    );
};

export default App;