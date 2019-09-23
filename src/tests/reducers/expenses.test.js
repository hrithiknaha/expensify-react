import expenseReducer from '../../reducers/expenses'
import moment from 'moment'

const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 195500,
    createdAt: moment(0).subtract(4,'days').valueOf()
}, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4595,
    createdAt: moment(0).add(4,'days').valueOf()
}]

test('should setup default expense value', () => {
    const state = expenseReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 'f34738478-sdfdsf898df'
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses)
})

test('should add expense', () => {
    const expense= {
        id: '109',
        description: 'Laptop',
        note : '',
        createdAt: 2000,
        amount: 163.98
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expenseReducer(expenses,action)
    expect(state).toEqual([...expenses, expense])
})

test('should edit an expense', () => {
    const amount = 122000
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        update: {
            amount
        }
    }
    const state = expenseReducer(expenses, action);
    expect(state[1].amount).toBe(amount)
})


test('should not edit an expense', () => {
    const amount = 122000
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        update: {
            amount
        }
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses)
})