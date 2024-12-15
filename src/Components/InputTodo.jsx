import { useState } from "react";
function generateId(todoList){
    const result = todoList.reduce((acc, ele) =>{
        if(ele.id === undefined) return acc;
        if(ele.id > acc) return ele.id;
        return acc;
    },0);
    return result+1;
}
const InputTodo = ({todoList, setTodoList}) => {

    const [task, setTask] = useState("");
    function handleTodoList(e){
        if(e.key === "Enter"){
            const taskObject = {task, id: generateId(todoList)};
            const updatedTodoList = [...todoList];
            updatedTodoList.push(taskObject);
            console.log(updatedTodoList);
            setTodoList(updatedTodoList);
            setTask("");
        }
    }
    return ( 
        <div className="flex justify-center align-middle gap-4 " >
            <p>What needs to be done</p>
            
            <input className="w-[50%] p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            type="text" 
            onChange={(e) => setTask(e.target.value)}
            value={task}
            onKeyDown={handleTodoList}/>
            {/* <button className="py-4 px-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={handleTodoList} >Add a new task</button> */}
        </div>
     );
}
 
export default InputTodo;