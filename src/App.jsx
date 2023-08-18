import React, { useState, useEffect } from 'react';
import './App.css';
import Input from './components/Input/Input';
import AddButton from './components/AddButton/AddButton';
import Task from './components/Task/Task';

function App() {



  return (
    <div className='App'>
      <main>

        <h1>To Do List</h1>
        <div className='container'>

          <Input />
          <AddButton />

          <div className="list">
            <Task taskDescription='hola' />
          </div>

        </div>

      </main>
    </div>
  );
}

export default App;
