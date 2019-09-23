import selectExpenses from '../../selectors/expenses'
import moment from 'moment'

const expense = [{
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

test('should filter by text value', () => {
    const filter = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expense, filter)
    expect(result).toEqual([expense[2], expense[1]])
})

test('should filter by start date', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = selectExpenses(expense, filter);
    expect(result).toEqual([expense[2], expense[0]])
})

test('should filter by start date', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2,'days')
    }
    const result = selectExpenses(expense, filter);
    expect(result).toEqual([expense[0], expense[1]])
})

test('should filter by text value', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expense, filter)
    expect(result).toEqual([expense[2], expense[0], expense[1]])
})

test('should filter by text value', () => {
    const filter = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expense, filter)
    expect(result).toEqual([expense[1], expense[2], expense[0]])
})

