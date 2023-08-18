import React, { useState, useEffect } from 'react';
import './App.css';
import Input from './components/Input';
import Button from './components/Button';
import List from './components/List';

function App() {

  return (
    <div className='App'>
      <main>

        <h1>To Do List</h1>
        <div className='container'>
          <Input />
          <Button />
          <List />
        </div>

      </main>
    </div>
  );
}

export default App;
