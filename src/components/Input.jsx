import React, { useState } from 'react';

function Input({ newTask }) {

  const [newTask, setNewTask] = useState('');
  newTask = setNewTask(e.target.value);

  return (
    <input className="Input form-control" type="text" placeholder="Type your new task" onChange={newTask} />
  );
}

export default Input;