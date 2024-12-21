import { useDispatch, useSelector } from "react-redux";
import { markedAllComplete, clearAllCompletedTask  } from "../slices/TodoListSlice";
import { selectedStatusFilter, setStatusFilter, allSelectedColor , setColorFilter, clearColorFilter, allColor, allStatus, colorClass} from "../slices/filterSlice";
import { remainingTask } from "../slices/TodoListSlice";
const ActionTodo = () => {
    const dispatch = useDispatch();
    const statusFilter = useSelector(selectedStatusFilter);
    const remainingTodoList  = useSelector(remainingTask);
    const allRecentColor = useSelector(allSelectedColor);
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
          <div className="font-semibold mb-2 text-amber-900 text-lg">Actions</div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={markAllComplete}>
            Mark All Completed
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={clearAllTask}>
            Clear Completed
          </button>
        </div>
  
        <div className="text-gray-600">
          <div className="font-semibold mb-2 text-amber-900 text-lg">Remaining Todos</div>
          <div>{remainingTodoList} item left</div>
        </div>
        <div>
          <div className="font-semibold mb-2 text-amber-900 text-lg">Filter by Status</div>
          <div className="flex flex-col gap-1">
            {allStatus.map(Status => (
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
          <div className="font-semibold mb-2 text-amber-900 text-lg">Filter by Color</div>
          <div className="flex flex-col gap-1">
              {allColor.map(Color =>(
                <div onClick={() =>handleTicked(Color)}>
                  <label className="flex items-center gap-2" >
                    <input type="checkbox" name="color" value={Color} checked={allRecentColor.includes(Color)}/>
                    <span className={`${colorClass[Color]} font-medium`}>{Color}</span>
                  </label>
                </div>
              ))}  
          </div>
        </div>
      </div>
    );
  };
  
  export default ActionTodo;
  