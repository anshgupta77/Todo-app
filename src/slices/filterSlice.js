import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filterTodo",
    initialState:{
        selectedStatus: "",
        selectedColor: [],
    },
    reducers:{
        setStatusFilter: (state, action) =>{
            const {selectStatus} = action.payload;
            console.log(selectStatus);
            state.selectedStatus = selectStatus;
        }
    }
})
export default filterSlice.reducer;
export const {setStatusFilter} = filterSlice.actions;
export const RecentStatusFilter = (state) => state.filter.selectedStatus;
export const getFilterTodoList = (selectStatus) =>(state) =>{
    if(selectStatus === "" || selectStatus === "All"){
        return state.todos.todoList;
    }
    return state.todos.todoList.filter(element =>element.status === selectStatus);  
}
