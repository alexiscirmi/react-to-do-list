import React, { useEffect, useState } from 'react';
import Input from './components/Input/Input';
import Task from './components/Task/Task';
import { ToastContainer, toast } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const storedList = JSON.parse(localStorage.getItem('list'))

  const [list, setList] = useState(storedList
    ? storedList
    : []
  );

  console.log(storedList)

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  const addTask = newTask => {
    if (!list.some((task) => task.description === newTask.description)) {
      setList([newTask, ...list]);
    } else {
      toast.error('That task is already added');
    }
  };

  const deleteTask = id => {
    const updatedList = list.filter((task) => task.id !== id);
    setList(updatedList);
  };

  return (
    <div className='App'>
      <main>
        <section className='d-flex justify-content-center gap-2'>
          <span className='simple'>(So simple)</span>
          <h1>TO DO LIST</h1>
        </section>

        <div className='container'>

          <Input
            submit={addTask}
          />

          <div className='list'>
            {list.map((task) =>
              <Task
                key={task.id}
                id={task.id}
                description={task.description}
                deleteTask={deleteTask}
              />
            )}
          </div>

        </div>
      </main>

      <ToastContainer
        position='bottom-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />

      <footer className='m-2 fs-5'>
        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-c-circle' viewBox='0 0 16 16'>
          <path d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z' />
        </svg>

        <span className='ms-1'><a href='https://github.com/cirmialexis/react-to-do-list'>Alexis Cirmi</a></span>
      </footer>
    </div >
  );
};

export default App;
