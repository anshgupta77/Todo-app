import { useState } from "react";
import { addTask } from "../slices/TodoListSlice";
import { useDispatch, useSelector } from "react-redux";
function generateId(todoList){
    const result = todoList.reduce((acc, ele) =>{
        if(ele.id === undefined) return acc;
        if(ele.id > acc) return ele.id;
        return acc;
    },0);
    return result+1;
}
const InputTodo = ({todoList, setTodoList}) => {

    const [task, setTask] = useState({
        todo: "",
    });
    const dispatch = useDispatch();
    function handleTodoList(e){
        if(e.key === "Enter"){
            dispatch(addTask({task}));
            setTask({todo: ""});
        }
    }
    return ( 
        <div className="flex items-center justify-between mb-6 " >
            <p className="text-2xl font-medium text-gray-700">What needs to be done?</p>
            
            <input 
            className="w-1/2 p-2 border border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text" 
            onChange={(e) => {
                const todo = e.target.value;
                setTask({todo})}
            }
            value={task.todo}
            onKeyDown={handleTodoList}/>
            {/* <button className="py-4 px-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={handleTodoList} >Add a new task</button> */}
        </div>
     );
}
 
export default InputTodo;