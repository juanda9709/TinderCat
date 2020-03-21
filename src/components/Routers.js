import React from 'react'
import {
    BrowserRouter as Router, 
    Switch,
    Route
} from 'react-router-dom'
import { Home } from './Home'
import { Login } from './Login'
import { Singup } from './Signup'

export const Routers = () => (
    <Router>
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/login'>
                <Login />
            </Route>
            <Route path='/signup'>
                <Singup />
            </Route>
        </Switch>
    </Router>
)