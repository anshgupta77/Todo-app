import { useState } from 'react';
import './App.css';
import TodoCard from './Components/TodoCard';
function App() {
  const [todoList, setTodoList] = useState([]);
  console.log(todoList);
  return (
    <div className="App">
      <div>
        Todos
      </div>
      <TodoCard todoList={todoList} setTodoList={setTodoList}></TodoCard>
    </div>
  );
}

export default App;
