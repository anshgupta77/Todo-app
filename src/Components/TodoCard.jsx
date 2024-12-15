import InputTodo from "./InputTodo";
import ViewTodo from "./ViewTodo";
import ActionTodo from "./ActionTodo";
const TodoCard = ({todoList, setTodoList}) => {
    return ( 
        <div className="w-[70%] mx-auto h-[90%] mt-10">
            <InputTodo todoList={todoList} setTodoList={setTodoList}></InputTodo>
            <ViewTodo todoList={todoList}  setTodoList={setTodoList}></ViewTodo>
            <ActionTodo></ActionTodo>
        </div>
     );
}
 
export default TodoCard;