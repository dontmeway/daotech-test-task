import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo, ITodos } from "../../types/todosTypes";





const initialState: ITodos = {
    todos: [],
    sortBy: 'all',
    completed: 0,
    uncompleted: 0
}



export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state: ITodos, action: PayloadAction<ITodo>) => {
            state.todos.push(action.payload)
            state.completed = state.todos.reduce((sum, item) => {
                if (item.completed) {
                    sum += 1
                }
                return sum
            }, 0)
            state.uncompleted = state.todos.length - state.completed
        },
        deleteTodo: (state: ITodos, action: PayloadAction<number>) => {
            state.todos = [...state.todos.filter(todo => Number(todo.id) !== action.payload)]
            state.completed = state.todos.reduce((sum, item) => {
                if (item.completed) {
                    sum += 1
                }
                return sum
            }, 0)
            state.uncompleted = state.todos.length - state.completed
        },
        todoDone: (state: ITodos, action: PayloadAction<{completed: boolean, id: number}>) => {
            state.todos.forEach(item => item.id === action.payload.id ? item.completed = action.payload.completed : item)
            state.completed = state.todos.reduce((sum, item) => {
                if (item.completed) {
                    sum += 1
                }
                return sum
            }, 0)
            state.uncompleted = state.todos.length - state.completed
        },
        setSortBy: (state: ITodos, action: PayloadAction<string>) => {
            state.sortBy = action.payload
        }
    }
})



export const {addTodo, deleteTodo, todoDone, setSortBy} = todosSlice.actions
export const todosReducer = todosSlice.reducer