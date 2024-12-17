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
export const {setStatusFilter, setColorFilter,clearColorFilter} = filterSlice.actions;
export const RecentStatusFilter = (state) => state.filter.selectedStatus;
export const getFilterTodoList = (selectStatus) =>(state) =>{
    if(selectStatus === "" || selectStatus === "All"){
        return state.todos.todoList;
    }
    return state.todos.todoList.filter(element =>element.status === selectStatus);  
}

export const getColorFilterTodoList = (filterTodoList) => (state) =>{
    const allColor = ["purple", "green", "red", "blue", "orange"];
    // const allSelectedColor = (state) => {
    //     if(state.filter.selectedColor.length !== 0){
    //         return state.filter.selectedColor;
    //     }
    //     return allColor;

    // }

    const selectedColors = state.filter.selectedColor.length > 0 
        ? state.filter.selectedColor 
        : allColor;

    return filterTodoList.filter(task => selectedColors.includes(task.color));
}
export const allSelectedColor = (state) => state.filter.selectedColor;
