import React, { useState } from 'react';
import './App.css';
import Input from './components/Input/Input';
import Task from './components/Task/Task';

function App() {

  const [list, setList] = useState([]);

  const addTask = task => {
    setList([task, ...list]);
  }

  const deleteTask = id => {
    const updatedList = list.filter((task) => task.id !== id);
    setList(updatedList);
  }

  return (
    <div className='App'>
      <main>

        <h1>To Do List</h1>
        <div className='container'>

          <Input onSubmit={addTask} />

          <div className="list">
            {list.map((task) =>
              <Task
                id={task.id}
                description={task.description}
                deleteTask={deleteTask}
              />
            )
            }
          </div>

        </div>

      </main>
    </div>
  );
}

export default App;
