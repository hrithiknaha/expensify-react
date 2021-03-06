import uuid from 'uuid'
import database from '../firebase/firebase'

export const addExpense = (expense) => {
    return{
        type: 'ADD_EXPENSE',
        expense
    }
}
export const startAddExpense = (expenseData = {}) => {
    return(dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = {description, note, amount, createdAt}

        database.ref(`users/${uid}/expense`).push(expense).then((ref) => {
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
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expense/${id}`).remove() .then(()=> {
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
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expense/${id}`).update(update).then(() => {
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
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expense`).once('value').then((snapshot) => {
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

