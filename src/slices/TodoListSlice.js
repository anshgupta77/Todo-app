import { createSlice } from "@reduxjs/toolkit";

function generateId(todoList){
    if(todoList === null) return 1;
    const result = todoList.reduce((acc, ele) =>{
        if(ele.id === undefined) return acc;
        if(ele.id > acc) return ele.id;
        return acc;
    },0);
    return result+1;
}
const todoListSlice = createSlice({
    name: "TodoList",
    initialState: {
        todoList: []
    },
    reducers: {
        addTask: (state, action) =>{
            const {task} = action.payload;
            const taskObject = {...task, id: generateId(state.todoList), status: "Active", color: "purple"};
            state.todoList.push(taskObject);
        },
        deleteTask: (state, action) =>{
            const {id} = action.payload;
            console.log(id);
            state.todoList = state.todoList.filter(task => task.id !== id);
        },
        updateColor: (state, action) =>{
            const {id, newColor} = action.payload;
            state.todoList = state.todoList.map(task => task.id === id ? {...task, color: newColor}: task);
        },
        updateStatus: (state, action) =>{
            const {id} = action.payload;
            state.todoList = state.todoList.map(task => task.id===id? task.status === "Active"? {...task, status: "Completed"}: {...task, status: "Active"}: task);
        },
        markedAllComplete: (state, action) =>{
            state.todoList = state.todoList.map(task =>({...task, status : "Completed"}));
        },
        clearAllCompletedTask: (state, action) =>{
            state.todoList = state.todoList.map(task =>({...task, status: "Active"}));
        }


    }
});

export const {addTask, deleteTask, updateColor, updateStatus, markedAllComplete, clearAllCompletedTask} = todoListSlice.actions;
export default todoListSlice.reducer;
export const allTaskList = (state) => state.todos.todoList;
export const remainingTask = (state) => state.todos.todoList.reduce((acc, ele) =>{
    if(ele.status === "Active") return acc+1;
    return acc;
}, 0); 