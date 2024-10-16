import React, { useState, useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const AddTask = () => {
  const { addTask } = useContext(TaskContext);
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('Personal');
  const [priority, setPriority] = useState('Medium');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask({
        title: task.trim(),
        time: new Date().toLocaleString(),
        category,
        priority,
        deadline,
      });
      setTask('');
      setDeadline('');
    }
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Personal</option>
        <option>Work</option>
        <option>Urgent</option>
      </select>
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <input
        type="datetime-local"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
