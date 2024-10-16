import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const initialDeleted = JSON.parse(localStorage.getItem('deletedTasks')) || [];
  const [tasks, setTasks] = useState(initialTasks);
  const [deletedTasks, setDeletedTasks] = useState(initialDeleted);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('deletedTasks', JSON.stringify(deletedTasks));
  }, [tasks, deletedTasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: uuidv4(), completed: false }]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
    );
  };

  const deleteTask = (id) => {
    const taskToDelete = tasks.find((task) => task.id === id);
    setDeletedTasks([...deletedTasks, taskToDelete]);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const restoreTask = (id) => {
    const taskToRestore = deletedTasks.find((task) => task.id === id);
    setTasks([...tasks, taskToRestore]);
    setDeletedTasks(deletedTasks.filter((task) => task.id !== id));
  };

  const clearDeleted = () => {
    setDeletedTasks([]);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        deleteTask,
        deletedTasks,
        restoreTask,
        clearDeleted,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
