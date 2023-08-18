import React, { useState } from 'react';
import './input.css'

function Input({ onSubmit }) {

  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  }

  const createTask = e => {
    const newTask = {
      id: crypto.randomUUID(),
      description: input
    }

    onSubmit(newTask)
  }

  return (
    <>
      <input
        className="input form-control"
        type="text"
        placeholder="Type your new task"
        onChange={handleChange}
      />

      <button
        type='submit'
        className='add-button btn btn-secondary'
        onClick={createTask}
      >
        Add task
      </button>
    </>
  );
}

export default Input;