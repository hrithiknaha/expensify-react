import React from 'react';
import { connect } from 'react-redux'

import ExpenseListItem from './ExpenseListItems'
import selectExpense from '../selectors/expenses'

export const ExpenseList = (props) => {
    return (
        <div className="content-container">
            <div className="list-header">
                <div className="show-for-mobile">Expenses</div>
                <div className="show-for-desktop">Expense</div>
                <div className="show-for-desktop">Amount</div>
            </div>
            <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No expenses</span>
                    </div>
                ) : (
                    props.expenses.map((expense) => {
                        return <ExpenseListItem key={expense.id} {...expense} />        //Sending props as object spread
                    })
                )
            }
            </div>
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