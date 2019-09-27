import {createStore, combineReducers, applyMiddleware} from 'redux';
import expenseReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'
import thunk from 'redux-thunk'

//Store
export default () => {
    const store = createStore(
        combineReducers({
            expenses: expenseReducer,
            filters: filtersReducer
        }),
        applyMiddleware(thunk)
    )
    return store
}
