import './task.css'

function Task({ taskDescription }) {
  return (
    <div className="task-container">
      <div className="task-description">{taskDescription}</div>
      <button className="btn btn-danger">X</button>
    </div>
  );
}

export default Task;