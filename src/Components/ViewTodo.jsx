
import TodoList from "./TodoList";
import { useDispatch, useSelector } from "react-redux";
import { updateColor, updateStatus, deleteTask } from "../slices/TodoListSlice";
import { selectFilterTodoList, RecentStatusFilter} from "../slices/filterSlice";
const VeiwTodo = ({ setTodoList,todoList}) => {
    console.log("Todo List :" , todoList)
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
    // const filterTodoList = useSelector(getFilterTodoList(statusFilter));

    // const colorFilterTodoList = useSelector(getColorFilterTodoList(filterTodoList));

    const filterTodoList = useSelector(selectFilterTodoList);

    return ( 
        <TodoList 
        todoList={filterTodoList}
        handleIsChecked={handleIsChecked}
        handleColor={handleColor}
        handleDelete={handleDelete}></TodoList>
     );
}
 
export default VeiwTodo;