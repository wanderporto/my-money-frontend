import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import App from './app'
import Dashboard from '../dashboard/dashboard'
import Billingcycle from '../billingCycle/billingcycle'
import dashboard from '../dashboard/dashboard';

export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={dashboard} />
            <Route path="billingCycles" component={Billingcycle} />
        </Route>
        
        <Redirect from="*" to="/" />
    </Router>
)