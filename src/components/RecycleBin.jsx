import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import { Link } from 'react-router-dom';

const RecycleBin = () => {
  const { deletedTasks, restoreTask, clearDeleted } = useContext(TaskContext);

  return (
    <div className="recycle-bin">
      <h2>Recycle Bin</h2>
      {deletedTasks.length > 0 ? (
        <>
          <ul>
            {deletedTasks.map((task) => (
              <li key={task.id}>
                {task.title}
                <button onClick={() => restoreTask(task.id)}>Restore</button>
              </li>
            ))}
          </ul>
          <button onClick={clearDeleted}>Empty Recycle Bin</button>
        </>
      ) : (
        <p>No deleted tasks.</p>
      )}
      <Link to="/" className="back-link">
        Back to To-Do List
      </Link>
    </div>
  );
};

export default RecycleBin;
