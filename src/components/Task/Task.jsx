import './task.css'

function Task({ id, description, deleteTask }) {

  return (
    <div className="task-container">
      <div className="task-description">{description}</div>
      <button className="btn btn-danger" onClick={() => deleteTask(id)}>X</button>
    </div>
  );
}

export default Task;