import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import AuthContainer from './auth/AuthContainer';
import HomeContainer from './HomeContainer';
import ProfileContainer from './profile/ProfileContainer';
import Friends from './Friends';
import ModalContainer from './modal/ModalContainer';

const App = () => {
    return (
    <div>
        <ModalContainer />
        <Switch>
            <AuthRoute exact path='/' component={AuthContainer} />
            <ProtectedRoute exact path='/home' component={HomeContainer} />
            <ProtectedRoute exact path='/profile' component={ProfileContainer} />
            <ProtectedRoute exact path='/friends' component={Friends} />
        </Switch>
    </div>
    );
};

export default App;