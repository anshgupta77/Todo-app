import InputTodo from "./InputTodo";
import ViewTodo from "./ViewTodo";
import ActionTodo from "./ActionTodo";
const TodoCard = () => {
    return ( 
        <div className="w-full md:w-3/4 lg:w-2/3 mx-auto p-6 bg-gray-200 shadow-lg rounded-md mb-6">
            <InputTodo ></InputTodo>
            <ViewTodo ></ViewTodo>
            <ActionTodo ></ActionTodo>
        </div>
     );
}
 
export default TodoCard;