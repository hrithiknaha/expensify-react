import filtersReducer from '../../reducers/filters'
import moment from 'moment';

test('should setup default filter value', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
       text: '',
       sortBy: 'date',
       startDate: moment().startOf('month'),
       endDate: moment().endOf('month') 
    })
})

test('should setup sort by amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
})

test('should set yp sortBy ', () => {
    const currentState = {
        text : '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = {type: 'SORT_BY_DATE'}
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date')
})

test('should setup text filter', () =>{
    const currentState = {
        text : 'Phone Bill',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const state = filtersReducer(currentState, {type: 'SET_TEXT', text: 'Car Bill'})
    expect(state.text).toBe('Car Bill')
})

test('should setup start date', () =>{
    const currentState = {
        text : '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const state = filtersReducer(currentState, {type: 'SET_START_DATE', startDate: moment(0).add(2,'days').valueOf()})
    expect(state.startDate).toBe(moment(0).add(2,'days').valueOf())
})

test('should setup end date', () =>{
    const currentState = {
        text : '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const state = filtersReducer(currentState, {type: 'SET_END_DATE', endDate: moment(0).subtract(2,'days').valueOf()})
    expect(state.endDate).toBe(moment(0).subtract(2,'days').valueOf())
})