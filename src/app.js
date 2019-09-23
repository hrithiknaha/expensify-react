import React from 'react';
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import 'react-dates/lib/css/_datepicker.css';

import { Provider } from 'react-redux'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill', amount: 24500}))
store.dispatch(addExpense({description: 'Gas Bill', createdAt: 100}))
store.dispatch(addExpense({description: 'Rent', amount:28989}))

const state = store.getState();
const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpense)

const jsx = (
     <Provider store={store}>  
        <AppRouter />
    </Provider>
)   //Provider Provides the store to all the components

ReactDOM.render(jsx, document.getElementById('app'))

//New Babel - 
// Direct state defination
// and arrow function this binding