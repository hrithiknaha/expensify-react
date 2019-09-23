import React from 'react';
import { connect } from 'react-redux'

import ExpenseListItem from './ExpenseListItems'
import selectExpense from '../selectors/expenses'

export const ExpenseList = (props) => {
    return (
        <div>
        {
            props.expenses.length === 0 ? (
                <p>No Expenses </p>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense} />        //Sending props as object spread
                })
            )
        }
        </div>
    )
}

const mapStateToProps = (state) => {    //Function which will do the logic inside the connect()     //State coming from app.js, all the files are calling them by importing and exporting therefore it was not clear, now it is
    return {
        expenses: selectExpense(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)    //Second argument is my wrapped function, or the normal component of a HOC

//As the state changes the components rerenders immediately