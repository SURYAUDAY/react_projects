import {createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos : [{id: 1, text: "hello redux toolkit"}]
}

export const todoSlice = createSlice({
    name: 'todo', // this name will be displayed in redux dev tool
    initialState,

    // reducers generally contains property and function pair and function have state and action, state is initialState 
    reducers: {
        addTodo: (state , action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }

})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer