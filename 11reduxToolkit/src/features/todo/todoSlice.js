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
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload  //to get/input/values text from users
            }
            //updating state
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            //applying filter on the ids of todos
            state.todos = state.todos.filter((todo) => todo.
            id !== action.payload)
        },
 
    } 
})

//exporting all the methods
export const {addTodo, removeTodo} = todoSlice.actions

//exporting all the reducers
export default todoSlice.reducer