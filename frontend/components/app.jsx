import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Splash from './splash';
import RegisterContainer from './sessions/register_container';

const App = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Splash} />
            <Route path='/register' component={RegisterContainer} />
        </Switch>
    </div>
);

export default App;