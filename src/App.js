import { configureStore } from "@reduxjs/toolkit";
import AppLayout from "./page/layout/appLayout"
import { Provider } from "react-redux";
import todoSlice from "./features/todoSlice";

const myStore = configureStore({
    reducer: {
        todoSlice
    }
})

function App() {
    return (
        <Provider store={myStore}>
            <AppLayout />
        </Provider>
    );
}

export default App;
