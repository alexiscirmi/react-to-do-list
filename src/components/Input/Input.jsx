import React, { useState } from 'react';
import './input.css'

function Input() {

  const [newTask, setNewTask] = useState('');

  return (
    <input className="input form-control" type="text" placeholder="Type your new task" />
  );
}

export default Input;