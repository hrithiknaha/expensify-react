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
        case "SET_EXPENSES":
            return action.expenses;
        default:
            return state;
    }
}

export default expenseReducer