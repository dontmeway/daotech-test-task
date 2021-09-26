import React, { ChangeEvent, KeyboardEvent } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import { addTodo } from '../store/features/todoSlice'
import { InputPopup } from '../UI/InputPopup'

export const Input = () => {
    const [popup, setPopup] = React.useState<boolean>(false)
    const [id, setId] = React.useState<number>(0)
    const [value, setValue] = React.useState<string>('')
    const dispatch = useAppDispatch()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const handleAddTodo = (e: KeyboardEvent) => {
        if (e.nativeEvent.key !== "Enter") {
            return
        }
        if (value.length > 4) {
            dispatch(addTodo({
                id: id,
                todo: value,
                completed: false
            }))
            setId(prev => prev + 1)
            setValue('')
        }
        else {
            setPopup(true)
            setTimeout(() => {
                setPopup(false)
            }, 3000)
        }
        
    }

    return (
        <div className = "popupParent">
            {popup && <InputPopup />}
            <input 
                className = "inputComponent" 
                value = {value} 
                onKeyUp = {handleAddTodo} 
                placeholder = "Enter To-Do"
                onChange = {handleChange}/>
        </div>
    )
}
