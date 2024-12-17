import { useDispatch, useSelector } from "react-redux";
import { markedAllComplete, clearAllCompletedTask  } from "../slices/TodoListSlice";
import { RecentStatusFilter, setStatusFilter, allSelectedColor , setColorFilter, clearColorFilter, allColor, allStatus} from "../slices/filterSlice";
import { remainingTask } from "../slices/TodoListSlice";
const ActionTodo = ({todoList}) => {
    const dispatch = useDispatch();
    const statusFilter = useSelector(RecentStatusFilter);
  
    const remainingTodoList  = useSelector(remainingTask);
    const allRecentColor = useSelector(allSelectedColor);
    const allColorList = allColor;
    const allStatusList = allStatus;
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
            {allStatusList.map(Status => (
              <>
                <div className="flex justify-between ">
                <label className="flex items-center gap-2">
                    {Status}
                  </label>
                  <input
                    type="radio"
                    name="status"
                    value={Status}
                    checked={statusFilter === Status}
                    onChange={(e) =>{
                      const selectStatus = e.target.value;
                      dispatch(setStatusFilter({selectStatus}))
                    }}
                    className="accent-blue-500"
                  />
                </div>
              </>
            ))}
          </div>
        </div>
  
        <div>
          <div className="font-semibold mb-2">Filter by Color</div>
          <div className="flex flex-col gap-1">
              {allColorList.map(Color =>(
                <div onClick={() =>handleTicked(Color)}>
                  <label className="flex items-center gap-2" >
                    <input type="checkbox" name="color" value={Color} checked={allRecentColor.includes(Color)}/>
                    <span className={`text-${Color}-600 font-medium`}>{Color}</span>
                  </label>
                </div>
              ))}  
          </div>
        </div>
      </div>
    );
  };
  
  export default ActionTodo;
  