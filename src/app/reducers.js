import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={ //initial state to show sample todo
    todos:[{id:1,todo:"Sample Todo",check:false}]
}
const todoSlice=createSlice({ //creating a reducer having function to update states
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{//Adding a todo
            const{todo,check}=action.payload //assuming payload contains todo and check, bydefault check is false
            const newTodo={
                id:nanoid(), //unique id
                todo,check
            }
            state.todos.push(newTodo) //pushing new todo
        },
        removeTodo:(state,action)=>{ //remove a todo by getting its id
            state.todos=state.todos.filter((todo)=>{
                return todo.id !==action.payload
            })
        },
        updateTodo:(state,action)=>{ //update a todo, mainly its check update
            const {check,todoId}=action.payload //its check:bool and todoId to find todo in store
            for (let index = 0; index < state.todos.length; index++) {
                const element = state.todos[index];
                if(element.id===todoId){
                    state.todos[index].check=check //on found, change check
                    return
                }
                
            }
        },
        setTodoArr:(state,action)=>{ //setting a complete todoarr to state
            state.todos=action.payload
        },
        deleteAll:(state,action)=>{ //delete all todos by setting state to empty array
            state.todos=[]
        }
    }
})

export const{addTodo,removeTodo,updateTodo,setTodoArr,deleteAll}=todoSlice.actions
export default todoSlice.reducer