import React, { useContext, useState } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const TaskItem = ({ task }) => {
  const { updateTask, deleteTask } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedCategory, setEditedCategory] = useState(task.category);
  const [editedPriority, setEditedPriority] = useState(task.priority);
  const [editedDeadline, setEditedDeadline] = useState(task.deadline || '');

  const handleComplete = () => {
    updateTask(task.id, { completed: !task.completed });
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleEdit = () => {
    if (isEditing && editedTitle.trim()) {
      updateTask(task.id, {
        title: editedTitle.trim(),
        category: editedCategory,
        priority: editedPriority,
        deadline: editedDeadline,
      });
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleComplete}
      />
      {isEditing ? (
        <div className="edit-fields">
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <select
            value={editedCategory}
            onChange={(e) => setEditedCategory(e.target.value)}
          >
            <option>Personal</option>
            <option>Work</option>
            <option>Urgent</option>
          </select>
          <select
            value={editedPriority}
            onChange={(e) => setEditedPriority(e.target.value)}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <input
            type="datetime-local"
            value={editedDeadline}
            onChange={(e) => setEditedDeadline(e.target.value)}
          />
        </div>
      ) : (
        <div className="task-details">
          <span className="task-title">{task.title}</span>
          <span className="task-time">{task.time}</span>
          <span className="task-category">{task.category}</span>
          <span className={`task-priority ${task.priority.toLowerCase()}`}>
            {task.priority}
          </span>
          {task.deadline && (
            <span className="task-deadline">
              Due: {new Date(task.deadline).toLocaleString()}
            </span>
          )}
        </div>
      )}
      <div className="task-actions">
        <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
