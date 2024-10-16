import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const TaskCounter = () => {
  const { tasks } = useContext(TaskContext);
  const pending = tasks.filter((task) => !task.completed).length;
  const completed = tasks.filter((task) => task.completed).length;

  return (
    <div className="task-counter">
      <span>Pending: {pending}</span>
      <span>Completed: {completed}</span>
    </div>
  );
};

export default TaskCounter;
