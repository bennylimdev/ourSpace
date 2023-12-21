import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Splash from './Splash';
import RegisterContainer from './sessions/RegisterContainer';
import Home from './Home';
import Profile from './Profile';
import Friends from './Friends';

const App = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Splash} />
            <Route path='/register' component={RegisterContainer} />
            <Route path='/home' component={Home} />
            <Route path='/profile' component={Profile} />
            <Route path='/friends' component={Friends} />
        </Switch>
    </div>
);

export default App;