import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import Billingcycle from '../billingCycle/billingcycle'

export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={Dashboard} />
        <Route path="/billingCycles" component={Billingcycle} />
        <Redirect from="*" to="/" />
    </Router>
)