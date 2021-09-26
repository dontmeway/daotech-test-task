import React, { ChangeEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { setSortBy } from '../store/features/todoSlice'

export const Sort = () => {
    const { completed, uncompleted, sortBy} = useAppSelector(state => state)
    const dispatch = useAppDispatch()


    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSortBy(e.target.value))
    }


    return (
        <div className = "sortComponent">
            <div>
                <div>Completed: {completed}</div>
                <div className = "mt-10">Uncompleted: {uncompleted}</div>
            </div>
            <select
                onChange = {handleChange} 
                value = {sortBy} 
                className = "mt-30">
                <option disabled>Sort</option>
                <option value = "all">All</option>
                <option value = "completed">Completed</option>
                <option value = "uncompleted">Uncompleted</option>
            </select>
        </div>
    )
}
