import InputTodo from "./InputTodo";
import ViewTodo from "./ViewTodo";
import ActionTodo from "./ActionTodo";
const TodoCard = ({todoList}) => {
    return ( 
        <div className="w-full md:w-3/4 lg:w-2/3 mx-auto p-6 bg-gray-200 shadow-lg rounded-md">
            <InputTodo todoList={todoList}></InputTodo>
            <ViewTodo todoList={todoList} ></ViewTodo>
            <ActionTodo todoList={todoList}></ActionTodo>
        </div>
     );
}
 
export default TodoCard;