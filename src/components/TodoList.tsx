import React from 'react'
import { useAppSelector } from '../hooks/hooks'
import { useSorted } from '../hooks/useSorted'
import { TodoItem } from './TodoItem'






export const TodoList = () => {
    const { todos, sortBy } = useAppSelector(state => state)
    const sortedTodos = useSorted(sortBy, todos)
    return (
        <div>
            {sortedTodos.map(todo => <TodoItem key = {todo.id} {...todo}/>)}
        </div>
    )
}
