import React, { useState } from 'react';
import styles from './Input.module.css'

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

  const handleEnter = e => {
    if (e.key === 'Enter') {
      createTask();
    }
  }

  return (
    <>
      <input
        className={`form-control ${styles.input}`}
        type='text'
        placeholder='Type your new task'
        value={input}
        onChange={handleChange}
        onKeyDown={handleEnter}
      />

      <button
        type='submit'
        className={`btn btn-secondary ${styles.addButton}`}
        onClick={createTask}
      >
        Add task
      </button>
    </>
  );
}

export default Input;