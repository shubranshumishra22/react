import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}




export const todoSlice = createSlice({
    //name of slice
    name: 'todo',
    //initial state
    initialState,
    //reducers contains properties and functions
    reducers: {
        addTodo: (state, action) => {},
        removeTodo: () => {},

    } 
})