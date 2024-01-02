import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import AuthContainer from './auth/AuthContainer';
import HomeContainer from './HomeContainer';
import Profile from './Profile';
import Friends from './Friends';
import ModalContainer from './modal/ModalContainer';

const App = () => {
    return (
    <div>
        <ModalContainer />
        <Switch>
            <AuthRoute exact path='/' component={AuthContainer} />
            <Route exact path='/home' component={HomeContainer} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/friends' component={Friends} />
        </Switch>
    </div>
    );
};

export default App;