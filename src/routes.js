import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/home'
import TodoPage from './page/todoPage/todoPage'

function RoutesComp() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/todo' element={<TodoPage />} />
        </Routes>
    )
}

export default RoutesComp