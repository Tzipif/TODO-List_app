import { createSlice } from "@reduxjs/toolkit"

const KEY_LOCAL = 'todo_local'

const initState = localStorage.getItem(KEY_LOCAL) ?
    JSON.parse(localStorage.getItem(KEY_LOCAL)) :
    { todo_ar: [] }

const todoSlice = createSlice({
    name: 'todos',
    initialState: initState,
    reducers: {
        addNew: (state, action) => {
            state.todo_ar.push(action.payload.newTodoItem)
            saveToLocalStorage(state)
        },
        removeAllItems: (state, action) => {
            state.todo_ar = []
            saveToLocalStorage(state)
        },
        removeOneItem: (state, action) => {
            const todoId = action.payload.id
            state.todo_ar = state.todo_ar.filter(item => item.id !== todoId);
            saveToLocalStorage(state)
        }
    }
})

const saveToLocalStorage = (state) => {
    localStorage.setItem(KEY_LOCAL, JSON.stringify(state))
}

export const { addNew, removeAllItems, removeOneItem } = todoSlice.actions
export default todoSlice.reducer