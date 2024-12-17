
import TodoList from "./TodoList";
import { useDispatch, useSelector } from "react-redux";
import { updateColor, updateStatus, deleteTask } from "../slices/TodoListSlice";
import { RecentStatusFilter , getFilterTodoList} from "../slices/filterSlice";
const VeiwTodo = ({ setTodoList,todoList}) => {
    console.log("Todo List :" , todoList)
    const dispatch = useDispatch();
    const statusFilter = useSelector(RecentStatusFilter);
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
    const filterTodoList = useSelector(getFilterTodoList(statusFilter));

    return ( 
        <TodoList 
        todoList={filterTodoList}
        handleIsChecked={handleIsChecked}
        handleColor={handleColor}
        handleDelete={handleDelete}></TodoList>
     );
}
 
export default VeiwTodo;