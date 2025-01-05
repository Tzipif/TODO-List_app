import React from 'react'
import './todoList.css'
import { useSelector } from 'react-redux'
import TodoListItem from '../todoListItem/todoListItem'

const TodoList = () => {

    const todoArr = useSelector(state => state.todoSlice.todo_ar)
    console.log(todoArr);

    return (
        <div id='out-of-outputs'>
            {todoArr.map((item) => {
                return (
                    <TodoListItem key={item.id} val={item} />
                )
            })}
        </div>
    )
}

export default TodoList