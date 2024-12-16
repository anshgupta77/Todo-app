import { useReducer, useState } from 'react';
import './App.css';
import TodoCard from './Components/TodoCard';
import { allTaskList } from './slices/TodoListSlice';
import { useSelector } from 'react-redux';
function App() {
  const todoList = useSelector(allTaskList);
  console.log(todoList);
  return (
    <div className="App min-h-screen flex flex-col items-center bg-blue-200">
      <div className='text-4xl font-semibold text-red-600 mb-6'>
        Todos
      </div>
      <TodoCard todoList={todoList}></TodoCard>
    </div>
  );
}

export default App;
