import React, { useRef } from 'react'
import './todoInput.css'
import { useDispatch } from 'react-redux';
import { addNew, removeAllItems } from '../../features/todoSlice';

const TodoInput = () => {

    const dispatch = useDispatch();

    const nameRef = useRef();
    const timeRef = useRef();

    const addNewItem = () =>{
        let todoItem = {
            name: nameRef.current.value,
            time: timeRef.current.value,
            id: Date.now()
        }
        dispatch(addNew({newTodoItem:todoItem}))
    }

    const removeAlls = () => {
        dispatch(removeAllItems())
    }
 
    return (
        <div id='out-of-inputs'>
            <div id='inputs'>
                <label>I have to do:</label>
                <input type='text' ref={nameRef}/>
                <label>I will do at</label>
                <input type='time' ref={timeRef}/>
            </div>
            <div id='buttons'>
                <button onClick={addNewItem}>Add new</button>
                <button onClick={removeAlls}>Reset All</button>
            </div>
        </div>
    )
}

export default TodoInput