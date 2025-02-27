
import TodoList from "./TodoList";
import { useDispatch } from "react-redux";
import { updateColor, updateStatus, deleteTask } from "../slices/TodoListSlice";
const VeiwTodo = () => {
    const dispatch = useDispatch();
    function handleDelete(id){
        dispatch(deleteTask({id}));
    }
    function handleColor(e, id){
        const newColor = e.target.value;
        console.log(newColor);
        dispatch(updateColor({id, newColor}))
    }
    function handleIsChecked(id){
       dispatch(updateStatus({id}));
    }

    return ( 
        <TodoList 
        handleIsChecked={handleIsChecked}
        handleColor={handleColor}
        handleDelete={handleDelete}></TodoList>
     );
}
 
export default VeiwTodo;