import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthContainer from './auth/AuthContainer';
import Home from './Home';
import Profile from './Profile';
import Friends from './Friends';
import ModalContainer from './modal/ModalContainer';

const App = () => {
    // const [showModal, setShowModal] = useState(false)

    return (
    <div>
        <ModalContainer />
        <Switch>
            <Route exact path='/' component={AuthContainer} />
            <Route path='/home' component={Home} />
            <Route path='/profile' component={Profile} />
            <Route path='/friends' component={Friends} />
        </Switch>
    </div>
    );
};

export default App;