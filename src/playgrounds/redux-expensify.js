import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ActionFucntions
const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => {
    return{
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
}

const removeExpense = ({ id } = {}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
}

const editExpense = (id, update) => {
    return{
        type: 'EDIT_EXPENSE',
        id,
        update
    }
}

//Expense Reducer
const expenseReducerDefaultState = []

const expenseReducer = (state = expenseReducerDefaultState, action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [        //Spread function of Array, where ...state grings the previous values and the new parameter just adds the name on to the array
                ...state,
                action.expense
            ]
        case "REMOVE_EXPENSE":
            return state.filter(({id}) => { // Destructuring expense array to only take ID same as expense.id
                return id !== action.id
            })
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id){
                    return {
                        ...expense,
                        ...action.update
                    }
                }else {
                    return expense;
                }
            })
        default:
            return state;
    }
}

//Action Functions
const setTextFilter = (text = '') => {
    return{
        type: 'SET_TEXT',
        text
    }
}

const sortByAmount = () => {
    return{
        type: 'SORT_BY_AMOUNT'
    }
}

const sortByDate = () => {
    return{
        type: 'SORT_BY_DATE'
    }
}

const setStartDate = (startDate) => {
    return{
        type: 'SET_START_DATE',
        startDate
    }
}
const setEndDate = (endDate) => {
    return{
        type: 'SET_END_DATE',
        endDate
    }
}
//Filter Reducer
const filtersReducerDefaultState = {
    text: "",
    sortBy: 'date',
    starDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) =>{
    switch(action.type){
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return{
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return{
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}

//Get Visible expense
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) =>{
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy ==='date')
            return a.createdAt < b.createdAt ? 1 : -1
        
        if(sortBy ==='amount')
            return a.amount < b.amount ? 1 : -1
    })
}

//Store
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    })
)
 
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses)
})

const expenseOne  = store.dispatch(addExpense({ description: 'rest', amount: 1000, createdAt: -21000}));
const expenseTwo = store.dispatch(addExpense({ description: 'rent', amount: 400, createdAt: -1000}));

// store.dispatch(removeExpense({ id:expenseOne.expense.id })); //store.dispatch returns the whole object
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))

// store.dispatch(setTextFilter('res'))
// store.dispatch(setTextFilter())

store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

//store.dispatch(setStartDate(2000))
// store.dispatch(setStartDate())
//store.dispatch(setEndDate(1250))
// store.dispatch(setEndDate())

//State
const demoState = {
    expenses: [{ 
        id: 'uahduisahdaidu',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //Date or amount
        startDate: undefined,
        endDate:  undefined
    }
}