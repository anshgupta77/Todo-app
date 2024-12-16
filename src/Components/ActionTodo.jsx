import { useDispatch, useSelector } from "react-redux";
import { markedAllComplete, clearAllCompletedTask } from "../slices/TodoListSlice";
import { remainingTask } from "../slices/TodoListSlice";
const ActionTodo = ({todoList}) => {
    const dispatch = useDispatch();
  
    const remainingTodoList  = useSelector(remainingTask);

    function markAllComplete(){
      dispatch(markedAllComplete());
    }
    function clearAllTask(){
      dispatch(clearAllCompletedTask());
    }
    return (
      <div className="flex justify-between items-start p-6 border-t border-gray-300 bg-white shadow-sm">
      
        <div className="flex flex-col items-start gap-2">
          <div className="font-semibold mb-2">Actions</div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={markAllComplete}>
            Mark All Completed
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={clearAllTask}>
            Clear Completed
          </button>
        </div>
  
        <div className="text-gray-600">
          <div className="font-semibold mb-2">Remaining Todos</div>
          <div>{remainingTodoList} item left</div>
        </div>
  
   
        <div>
          <div className="font-semibold mb-2">Filter by Status</div>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between ">
            <label className="flex items-center gap-2">
                All
              </label>
              <input
                type="radio"
                name="status"
                value=""
                className="accent-blue-500"
              />
            </div>
            <div className="flex justify-between ">
            <label className="flex items-center gap-2">
                Active
              </label>
              <input
                type="radio"
                name="status"
                value="active"
                className="accent-blue-500"
              />
            </div>
            <div className="flex justify-between ">
            <label className="flex items-center gap-2">
                Completed
              </label>
              <input
                type="radio"
                name="status"
                value="completed"
                className="accent-blue-500"
              />
            </div>
          </div>
        </div>
  
        <div>
          <div className="font-semibold mb-2">Filter by Color</div>
          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2">
              <input type="checkbox" name="color" value="green" />
              <span className="text-green-600 font-medium">Green</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="color" value="blue" />
              <span className="text-blue-600 font-medium">Blue</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="color" value="orange" />
              <span className="text-orange-500 font-medium">Orange</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="color" value="purple" />
              <span className="text-purple-600 font-medium">Purple</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="color" value="red" />
              <span className="text-red-600 font-medium">Red</span>
            </label>
          </div>
        </div>
      </div>
    );
  };
  
  export default ActionTodo;
  