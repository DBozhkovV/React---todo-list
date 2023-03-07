import './App.css';
import { useState } from 'react';
import { FormCreator } from './components/todo-creator';
import { TodoItem } from './components/todo-item/todo-item';
import json from './todos.json';

function App() {
  const [notCompletedTodos, setNotCompletedTodos] = useState(json.filter(todo => !todo.isDone));
  const [completedTodos, setCompletedTodos] = useState(json.filter(todo => todo.isDone));

  const addTodo = (title) => {
    setNotCompletedTodos([...notCompletedTodos, { title, isDone: false }])
  }

  const removeNotCompletedTodo = (index) => {
    const tds = [...notCompletedTodos];
    tds.splice(index, 1);
    setNotCompletedTodos(tds);
  };

  const removeCompletedTodo = (index) => {
    const tds = [...completedTodos];
    tds.splice(index, 1);
    setCompletedTodos(tds);
  };

  const editNotCompletedTodo = (index, newTitle) => {
    const tds = [...notCompletedTodos];
    tds[index].title = newTitle;
    setNotCompletedTodos(tds);
  }

  const editCompletedTodo = (index, newTitle) => {
    const tds = [...completedTodos];
    tds[index].title = newTitle;
    setCompletedTodos(tds);
  }

  const checkNotCompletedTodo = (index) => {
    const tds = [...notCompletedTodos];
    const todo = tds[index];
    todo.isDone = true;
    removeNotCompletedTodo(index);
    setCompletedTodos([...completedTodos, todo]);
  }

  const checkCompletedTodo = (index) => {
    const tds = [...completedTodos];
    const todo = tds[index];
    todo.isDone = false;
    removeCompletedTodo(index);
    setNotCompletedTodos([...notCompletedTodos, todo]);
  }

  return (
    <div className="App">
      <h1>Todo app</h1>
      <hr />
      <FormCreator createTodo={addTodo} />
      <div className='columns-frame'>
        <div>
          <h3>Non-completed</h3>
          {
            notCompletedTodos.map((todo, index) => {
              return (
                <TodoItem 
                  key={index} 
                  itemIndex={index} 
                  removeItem={removeNotCompletedTodo}
                  editItem={editNotCompletedTodo}
                  title={todo.title}
                  index={index}
                  checkItem={() => checkNotCompletedTodo(index)} 
                />
              );
            })
          }
        </div>
        <div>
          <h3>Completed</h3>
          {
            completedTodos.map((todo, index) => {
              return (
                <TodoItem 
                  key={index} 
                  itemIndex={index} 
                  removeItem={removeCompletedTodo}
                  editItem={editCompletedTodo}
                  title={todo.title}
                  index={index}
                  checkItem={() => checkCompletedTodo(index)} 
                />
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
