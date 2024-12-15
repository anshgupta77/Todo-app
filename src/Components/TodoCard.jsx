import InputTodo from "./InputTodo";
import ViewTodo from "./ViewTodo";
import ActionTodo from "./ActionTodo";
const TodoCard = ({todoList, setTodoList}) => {
    return ( 
        <div className="w-full md:w-3/4 lg:w-2/3 mx-auto p-6 bg-white shadow-lg rounded-md">
            <InputTodo todoList={todoList} setTodoList={setTodoList}></InputTodo>
            <ViewTodo todoList={todoList}  setTodoList={setTodoList}></ViewTodo>
            <ActionTodo></ActionTodo>
        </div>
     );
}
 
export default TodoCard;