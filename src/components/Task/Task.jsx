import styles from './Task.module.css';

function Task({ id, description, deleteTask }) {

  return (
    <div className={styles.taskContainer}>
      <div className={styles.taskDescription}>{description}</div>
      <button className={`btn btn-danger ${styles.btnDanger}`} onClick={() => deleteTask(id)}>X</button>
    </div>
  );
};

export default Task;