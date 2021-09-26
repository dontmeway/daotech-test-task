import React from "react";
import { ITodo } from "../types/todosTypes";


export const useSorted = (sortBy: string, arr: ITodo[]) => {
    const sortedTodos = React.useMemo(() => {
        if (sortBy === 'completed') {
            return arr.filter(item => item.completed)
        } else if (sortBy === 'uncompleted') {
            return arr.filter(item => !item.completed)
        }
        else {
            return arr
        }
    }, [sortBy, arr])
    return sortedTodos
}