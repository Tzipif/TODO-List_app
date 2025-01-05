import React from 'react'
import './todoPage.css'
import TodoInput from '../../components/todoInput/todoInput'
import TodoList from '../../components/todoList/todoList'

const TodoPage = () => {
  return (
    <div id='todo-page'>
        <h1>TODO List App</h1>
        <TodoInput />
        <TodoList />
    </div>
  )
}

export default TodoPage