import { createStore } from 'redux';

//Action Function
const incremenetCount = ({ incrementBy = 1 } = {}) => {
    return {
        type: "INCREMENT",
        incrementBy //Using ES6 Syntax
    }
}

const decrementCount = ({ decrementBy = 1 } = {}) => {
    return {
        type: "DECREMENT",
        decrementBy //Using ES6 Syntax
    }
}

const setCount = ({ count = 1 } = {}) => {
    return {
        type: "SET",
        count //Using ES6 Syntax
    }
}

const resetCount = ({} = {}) => {
    return {
        type: "RESET",
    }
}

//Reducers
const countReducer = (state = {count: 0}, action) => {
    switch(action.type){
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            }
        case "DECREMENT":
            return{
                count: state.count - action.decrementBy
            }
        case "SET":
            return{
                count: action.count
            }
        case "RESET":
            return{
                count: 0
            }
        default:
            return state
    }
}

const store = createStore(countReducer) //Gets called right away and one time for every dispatch call

store.subscribe(() => {
    console.log(store.getState());
}) //Calls everytime the store changes

//Action - USED TO COMMUNICATE WITH THE STORE
store.dispatch(incremenetCount({incrementBy:  3}));

store.dispatch(decrementCount());

store.dispatch(setCount({count: 10}));

store.dispatch(resetCount())

store.dispatch(decrementCount({decrementBy: 5})); //When even this function is called it reruns the store function, and matches with the case type.


