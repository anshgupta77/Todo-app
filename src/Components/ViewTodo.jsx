const VeiwTodo = ({ setTodoList,todoList}) => {
    function deleteTask(id){
        const filterTodoList = todoList.filter(task => task.id!==id);
        setTodoList(filterTodoList);
    }
    return ( 
        <div>
            {todoList.map((element, id) =>
                <div className="flex">
                <div className="border-black">.</div>
                <div>{element.task}</div>
                <select >
                    <option value="purple" >purple</option>
                    <option value="blue">blue</option>
                    <option value="red">red</option>
                    <option value="green">green</option>
                </select>
                <button onClick={() => deleteTask(element.id)}>X</button>
                </div>
            )}
        </div>
     );
}
 
export default VeiwTodo;