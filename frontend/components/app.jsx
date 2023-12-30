import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthContainer from './auth/AuthContainer';
import Home from './Home';
import Profile from './Profile';
import Friends from './Friends';
import Modal from './modal/Modal';

const App = () => {
    const [showModal, setShowModal] = useState(false)

    return (
    <div>
        {showModal && (
            <Modal
            onCloseButtonClick={() => {
                setShowModal(false);
            }}
            />
        )}
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