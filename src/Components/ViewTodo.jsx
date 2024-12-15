import { useState } from "react";
import tick from "./../service/tick correct.png"
import TodoList from "./TodoList";
const VeiwTodo = ({ setTodoList,todoList}) => {
    console.log("Todo List :" , todoList)
    function deleteTask(id){
        const filterTodoList = todoList.filter(task => task.id!==id);
        setTodoList(filterTodoList);
    }
    function handleColor(e, id){
        const currentColor = e.target.value;
        console.log(currentColor);
        const updatedTodoList = todoList.map(element =>
            element.id === id? {...element,color: currentColor}:element
        );
        setTodoList(updatedTodoList);
    }
    function handleIsChecked(status, id){
        const updatedTodoList = todoList.map(element => element.id === id? element.status === "Active" ? {...element, status: "Completed"} : {...element, status: "Active"} : element);
        setTodoList(updatedTodoList);
    }

    return ( 
        <TodoList 
        todoList={todoList}
        handleIsChecked={handleIsChecked}
        handleColor={handleColor}
        deleteTask={deleteTask}></TodoList>
     );
}
 
export default VeiwTodo;