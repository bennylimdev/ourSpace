import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Splash from './splash';
import RegisterForm from './sessions/register';

const App = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Splash} />
            <Route path='/register' component={RegisterForm} />
        </Switch>
    </div>
);

export default App;