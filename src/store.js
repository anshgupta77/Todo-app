import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "./slices/TodoListSlice";
import filterReducer from "./slices/filterSlice";
export const store = configureStore({
    reducer: {
        todos: todoListReducer,
        filter: filterReducer, 
    },
})