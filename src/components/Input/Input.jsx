import React, { useState } from 'react';
import './input.css';

function Input({ submit }) {

  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value)
  };

  const createTask = e => {

    if (input.length > 0) {

      const newTask = {
        id: crypto.randomUUID(),
        description: input
      };

      submit(newTask);
      setInput('');
    }
  };

  return (
    <>
      <input
        className="input form-control"
        type="text"
        placeholder="Type your new task"
        value={input}
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