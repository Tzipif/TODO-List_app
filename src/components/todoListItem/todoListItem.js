import React from 'react'
import './todoListItem.css'
import { useDispatch } from 'react-redux';
import { removeOneItem } from '../../features/todoSlice';

const TodoListItem = ({ val }) => {

    const dispatch = useDispatch()
    
    const removeItem = () => {
        dispatch(removeOneItem({id:val.id}))
    }

    return (
      <div id='outputs'>
          <h3>{val.name} at time: {val.time}</h3>
          <button onClick={removeItem}>X</button>
      </div>
    );
  };

export default TodoListItem