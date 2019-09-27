import { addExpense, editExpense, removeExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup edit exepense action object', () => {
    const action = editExpense('123abc', {note: 'New note for test'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        update : {
            note: 'New note for test'
        }
    })
})

test('should setup add expense action object', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})


// test('should setup add expense action object (default)', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense : {
//             id: expect.any(String),
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0
//         }
//     })
// })