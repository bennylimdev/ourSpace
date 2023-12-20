import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Splash from './splash';
import RegisterContainer from './sessions/RegisterContainer';
import Home from './home';

const App = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Splash} />
            <Route path='/register' component={RegisterContainer} />
            <Route path='/home' component={Home} />
        </Switch>
    </div>
);

export default App;