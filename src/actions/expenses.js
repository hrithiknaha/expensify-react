import uuid from 'uuid'
import database from '../firebase/firebase'

export const addExpense = (expense) => {
    return{
        type: 'ADD_EXPENSE',
        expense
    }
}
export const startAddExpense = (expenseData = {}) => {
    return(dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = {description, note, amount, createdAt}

        database.ref('expense').push(expense).then((ref) => {
            dispatch(addExpense({
              id: ref.key,
              ...expense  
            }))
        })
    }
}

export const removeExpense = ({ id } = {}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
}

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch) => {
       return database.ref(`expense/${id}`).remove() .then(()=> {
           dispatch(removeExpense({id}))
       })
    }
}

export const editExpense = (id, update) => {
    return{
        type: 'EDIT_EXPENSE',
        id,
        update
    }
}

export const startEditExpense = (id, update) => {
    return (dispatch) => {
        return database.ref(`expense/${id}`).update(update).then(() => {
            dispatch(editExpense(id, update))
        })
    }
}

export const setExpenses = (expenses) => {
    return {
        type: 'SET_EXPENSES',
        expenses
    }
}

export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expense').once('value').then((snapshot) => {
            const expenses = [];
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setExpenses(expenses))
        })
    }
}

