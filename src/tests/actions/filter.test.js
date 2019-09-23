import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters'

test('should setup filter text filter', () => {
    const action = setTextFilter('car bill');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'car bill'
    })
})

test('should setup filter text filter default', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should setup sort by date', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
    })
})

test('should setup sort by amount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
    })
})

test('should setup set start date', () => {
    const action = setStartDate(1000);
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: 1000
    })
})

test('should setup set end date', () => {
    const action = setEndDate(10100);
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: 10100
    })
})



