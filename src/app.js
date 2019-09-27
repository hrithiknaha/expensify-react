import React from 'react';
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import 'react-dates/lib/css/_datepicker.css';

import { Provider } from 'react-redux'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

import configureStore from './store/configureStore'
import {startSetExpenses} from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import './firebase/firebase'

const store = configureStore();


const jsx = (
     <Provider store={store}>  
        <AppRouter />
    </Provider>
)   //Provider Provides the store to all the components

ReactDOM.render(<p>Loading ...</p>, document.getElementById('app'))

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'))
})

//New Babel - 
// Direct state defination
// and arrow function this binding