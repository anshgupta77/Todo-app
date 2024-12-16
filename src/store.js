import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "./slices/TodoListSlice"
export const store = configureStore({
    reducer: {
        todos: todoListReducer,
    },
})