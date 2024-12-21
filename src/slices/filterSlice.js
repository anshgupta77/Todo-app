import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filterTodo",
    initialState:{
        selectedStatus: "All",
        selectedColor: [],
    },
    reducers:{
        setStatusFilter: (state, action) =>{
            const {selectStatus} = action.payload;
            console.log(selectStatus);
            state.selectedStatus = selectStatus;
        },
        setColorFilter: (state, action) =>{
            const {selectColor} = action.payload;
            console.log(selectColor);
            state.selectedColor.push(selectColor);
        },
        clearColorFilter: (state, action) =>{
            const {selectColor} = action.payload;
            console.log(selectColor);
            if(state.selectedColor.includes(selectColor)) {
                state.selectedColor = state.selectedColor.filter(color => color!==selectColor);
            }
        }

    }
})
export default filterSlice.reducer;
export const {setStatusFilter, setColorFilter, clearColorFilter} = filterSlice.actions;
export const RecentStatusFilter = (state) => state.filter.selectedStatus;


export const selectFilterTodoList = (state) =>{
    var {selectedStatus, selectedColor} = state.filter;
    var filterTodoList = state.todos.todoList;
    if(selectedStatus !== "All"){
        filterTodoList = filterTodoList.filter(task => task.status === selectedStatus);
    }
    if(selectedColor.length === 0){
        selectedColor = allColor;
    }
    filterTodoList = filterTodoList.filter(task => selectedColor.includes(task.color));
    return filterTodoList; 
}

export const allColor = ["purple", "green", "red", "blue", "orange"];
export const allStatus = ["All", "Active", "Completed"];
export const colorClass = {
    red: "text-red-600",
    blue: "text-blue-600",
    green: "text-green-600",
    orange: "text-orange-600",
    purple: "text-purple-600",
  };

export const allSelectedColor = (state) => state.filter.selectedColor;
