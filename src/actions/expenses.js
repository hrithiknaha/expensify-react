import uuid from 'uuid'

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

export  {
    addExpense,
    removeExpense,
    editExpense
}