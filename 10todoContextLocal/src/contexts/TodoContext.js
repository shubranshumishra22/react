import { useContext, createContext } from "react";

export const TodoContext = createContext({
       //properties
    todos : [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
       //now writing functionality 
       addTodo: (todo)=> {},
       updateTodo: (id, todo)=> {},
       deleteTodo: (id)=>{},
       toggleComplete: (id)=>{}      
})

export const TodoProvider = TodoContext.Provider

export default function useTodo(){
    return useContext(TodoContext) 
}