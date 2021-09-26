import React from 'react';
import { Input } from './components/Input';
import { Sort } from './components/Sort';
import { TodoList } from './components/TodoList';


function App() {
  
  return (
    <div className="App container d-flex flex-column align-center">
      <Sort />
        <h1 className = "mb-20">Simple To-Do List</h1>
        <div>
          <Input />
          <TodoList />
        </div>
    </div>
  );
}

export default App;
