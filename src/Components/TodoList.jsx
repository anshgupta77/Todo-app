import tick from "./../service/tick correct.png"
import { useSelector } from "react-redux";
import { selectedStatusFilter, allColor, colorClass, selectFilterTodoList } from "../slices/filterSlice";
const TodoList = ({handleDelete,handleColor, handleIsChecked}) => {
    const todoList = useSelector(selectFilterTodoList);
    const statusFilter = useSelector(selectedStatusFilter);
    if(todoList.length === 0 && statusFilter === "All"){
        return (
            <div className="text-2xl space-y-4 overflow-y-auto min-h-[30vh] mb-[80px] text-blue-700">
            No data is Available Currently!!!
            </div>
        )
    }
    if(todoList.length === 0 ){
        return (
            <div className="text-2xl space-y-4 overflow-y-auto min-h-[30vh] mb-[80px] text-blue-700">
            No {statusFilter} task.
            </div>
        )
    }

    return ( <div className="space-y-4 overflow-y-auto min-h-[30vh] mb-[80px]">
        {todoList.map((element) => (
            <div
            key={element.id}
            className="flex items-center justify-between "
            >
            <div className="flex items-center gap-2 cursor-pointer" onClick={() =>handleIsChecked(element.id)}>
                {element.status === "Completed" ? <img src={tick} className="w-6 h-6 object-cover" 
                 />:<div className="w-6 h-6 border border-gray-400 rounded-full bg-white"
                ></div>}
                <span className="text-lg font-medium text-gray-700">{element.todo}</span>
            </div>
            <div className="flex items-center gap-4">
                <select 
                value={element.color}
                className={`border border-gray-300 outline-none rounded-md px-2 py-1 font-bold text-${element.color}-600`}
                onChange={(e) =>handleColor(e,element.id)}>
                {allColor.map(Color =>(
                    <>
                        <option value={Color} className={`${colorClass[Color]} font-extrabold`}>{Color}</option>
                    </>
                ))}
                </select>
                <button
                className="text-red-500 font-extrabold hover:text-red-700"
                onClick={(e) => handleDelete(element.id)}
                >
                X
                </button>
            </div>
            </div>
        ))}
        </div>
 );
}
 
export default TodoList;