import React from 'react';
import ExpenseList from './ExpenseList';
import { connect } from  'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from  '../actions/expenses'

const EditExpensePage = (props) =>{
    return (
        <div>
            <ExpenseForm 
                expense={props.expense}
                onSubmit ={(expense) =>{
                    props.dispatch(editExpense(props.expense.id, expense))
                    props.history.push('/');
                }}
            />
            <button onClick={() => {
                props.dispatch(removeExpense({id: props.expense.id}))       //Dispatch is also send as a prop, hence we can use it directly
                props.history.push('/');
            }}>Remove</button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(EditExpensePage);