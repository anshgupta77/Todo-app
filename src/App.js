import { useState } from 'react';
import './App.css';
import TodoCard from './Components/TodoCard';
function App() {
  const [todoList, setTodoList] = useState([]);
  console.log(todoList);
  return (
    <div className="App min-h-screen flex flex-col items-center bg-gray-50">
      <div className='text-4xl font-semibold text-red-600 mb-6'>
        Todos
      </div>
      <TodoCard todoList={todoList} setTodoList={setTodoList}></TodoCard>
    </div>
  );
}

export default App;
