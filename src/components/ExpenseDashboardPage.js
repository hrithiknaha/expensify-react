import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashboardPage = () =>{
    return (
        <div>
            <ExpenseList />
            <ExpenseListFilters />
        </div>
    )
}

export default ExpenseDashboardPage;