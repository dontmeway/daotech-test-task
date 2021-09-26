import React, { ChangeEvent } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import { deleteTodo, todoDone } from '../store/features/todoSlice'
import { ITodo } from '../types/todosTypes'






export const TodoItem = (todo: ITodo) => {
    const [checked, setChecked] = React.useState<boolean>(todo.completed)
    const dispatch = useAppDispatch()

    const handleTodo = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(todoDone({
            id: Number(todo.id),
            completed: e.target.checked
        }))
        setChecked(e.target.checked)
    }   

    const handleDone = () => {
        dispatch(todoDone({
            id: Number(todo.id),
            completed: !checked
        }))
        setChecked(prev => !prev)
    }

    const handleRemove = () => {
        dispatch(deleteTodo(Number(todo.id)))
    }

    return (
        <div
            className = {`todoComponent d-flex justify-between align-center ${todo.completed ? "done" : ""}`}>
            <input
                onChange = {handleTodo} 
                type = "checkbox" 
                checked = {checked}
                />
            <p onClick = {handleDone}>{todo.todo}</p>
            <i 
                onClick = {handleRemove}
                className="bi bi-x-circle-fill"></i>
        </div>
    )
}
