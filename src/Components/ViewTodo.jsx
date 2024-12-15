
const VeiwTodo = ({ setTodoList,todoList, setColor, color}) => {

    function deleteTask(id){
        const filterTodoList = todoList.filter(task => task.id!==id);
        setTodoList(filterTodoList);
    }
    function handleColor(e){
        const currentColor = e.target.value;
        setColor(currentColor);
    }


    return ( 
        <div className="space-y-4 overflow-y-auto min-h-[30vh] mb-[80px]">
        {todoList.map((element) => (
            <div
            key={element.id}
            className="flex items-center justify-between "
            >
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 border border-gray-400 rounded-full bg-white"></div>
                <span className="text-lg font-medium text-gray-700">{element.task}</span>
            </div>
            <div className="flex items-center gap-4">
                <select 
                value={color}
                className={`border border-gray-300 outline-none rounded-md px-2 py-1 font-bold text-${color}-600`}
                onChange={handleColor}>
                <option value="purple" className="text-purple-600 font-extrabold">Purple</option>
                <option value="blue" className="text-blue-600 font-extrabold">Blue</option>
                <option value="red" className="text-red-600 font-extrabold">Red</option>
                <option value="green" className="text-green-600 font-extrabold">Green</option>
                </select>
                <button
                className="text-red-500 font-extrabold hover:text-red-700"
                onClick={() => deleteTask(element.id)}
                >
                X
                </button>
            </div>
            </div>
        ))}
        </div>

     );
}
 
export default VeiwTodo;