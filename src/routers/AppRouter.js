import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute'

export const history = createHistory()

const AppRouter = () => {
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <Route path="/" component={LoginPage} exact={true}/>
                    <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} exact={true}/>
                    <PrivateRoute path="/create" component={AddExpensePage} />
                    <PrivateRoute path="/edit/:id" component={EditExpensePage} exact={true}/>
                    <Route path="/help" component={HelpPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;