import { useDispatch, useSelector } from "react-redux";
import { markedAllComplete, clearAllCompletedTask  } from "../slices/TodoListSlice";
import { RecentStatusFilter, setStatusFilter, allSelectedColor , setColorFilter, clearColorFilter} from "../slices/filterSlice";
import { remainingTask } from "../slices/TodoListSlice";
const ActionTodo = ({todoList}) => {
    const dispatch = useDispatch();
    const statusFilter = useSelector(RecentStatusFilter);
  
    const remainingTodoList  = useSelector(remainingTask);
    const allRecentColor = useSelector(allSelectedColor);
    console.log("All Recent Color: ", allRecentColor);
    function markAllComplete(){
      dispatch(markedAllComplete());
    }
    function clearAllTask(){
      dispatch(clearAllCompletedTask());
    }

    function handleTicked(selectColor){
      if(!allRecentColor.includes(selectColor)){
        dispatch(setColorFilter({selectColor}));
      }
      else{
        dispatch(clearColorFilter({selectColor}));
      }
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
                value="All"
                checked={statusFilter === "All"}
                onChange={(e) =>{
                  const selectStatus = e.target.value;
                  dispatch(setStatusFilter({selectStatus}))
                }}
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
                value="Active"
                className="accent-blue-500"
                checked={statusFilter === "Active"}
                onChange={(e) =>{
                  const selectStatus = e.target.value;
                  dispatch(setStatusFilter({selectStatus}))
                }}
              />
            </div>
            <div className="flex justify-between ">
            <label className="flex items-center gap-2">
                Completed
              </label>
              <input
                type="radio"
                name="status"
                value="Completed"
                className="accent-blue-500"
                checked={statusFilter === "Completed"}
                onChange={(e) =>{
                  const selectStatus = e.target.value;
                  dispatch(setStatusFilter({selectStatus}))
                }}
              />
            </div>
          </div>
        </div>
  
        <div>
          <div className="font-semibold mb-2">Filter by Color</div>
          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2" onClick={() =>handleTicked("green")}>
              <input type="checkbox" name="color" value="green" checked={allRecentColor.includes("green")}/>
              <span className="text-green-600 font-medium">Green</span>
            </label>
            <label className="flex items-center gap-2" onClick={() =>handleTicked("blue")}>
              <input type="checkbox" name="color" value="blue" checked={allRecentColor.includes("blue")}/>
              <span className="text-blue-600 font-medium">Blue</span>
            </label>
            <label className="flex items-center gap-2"  onClick={() =>handleTicked("orange")}>
              <input type="checkbox" name="color" value="orange" checked={allRecentColor.includes("orange")}/>
              <span className="text-orange-500 font-medium">Orange</span>
            </label>
            <label className="flex items-center gap-2"  onClick={() =>handleTicked("purple")}>
              <input type="checkbox" name="color" value="purple" checked={allRecentColor.includes("purple")}/>
              <span className="text-purple-600 font-medium">Purple</span>
            </label>
            <label className="flex items-center gap-2" onClick={() =>handleTicked("red")}>
              <input type="checkbox" name="color" value="red" checked={allRecentColor.includes("red")}/>
              <span className="text-red-600 font-medium">Red</span>
            </label>
          </div>
        </div>
      </div>
    );
  };
  
  export default ActionTodo;
  