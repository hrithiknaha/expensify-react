import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpensesSummary from './ExpenseSummary'

const ExpenseDashboardPage = () =>{
    return (
        <div>
            <ExpensesSummary />
            <ExpenseList />
            <ExpenseListFilters />
        </div>
    )
}

export default ExpenseDashboardPage;