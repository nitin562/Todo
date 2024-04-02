import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,todo:"Sample Todo",check:false}]
}
const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const{todo,check}=action.payload
            const newTodo={
                id:nanoid(),
                todo,check
            }
            state.todos.push(newTodo)
        },
        removeTodo:(state,action)=>{
            console.log(action)
            state.todos=state.todos.filter((todo)=>{
                return todo.id !==action.payload
            })
        },
        updateTodo:(state,action)=>{
            console.log(action.payload)
            const {check,todoId}=action.payload
            for (let index = 0; index < state.todos.length; index++) {
                const element = state.todos[index];
                if(element.id===todoId){
                    console.log("found")
                    state.todos[index].check=check
                    return
                }
                
            }
            console.log(state.todos)
        },
        setTodoArr:(state,action)=>{
            state.todos=action.payload
        },
        deleteAll:(state,action)=>{
            state.todos=[]
        }
    }
})

export const{addTodo,removeTodo,updateTodo,setTodoArr,deleteAll}=todoSlice.actions
export default todoSlice.reducer