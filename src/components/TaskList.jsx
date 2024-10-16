import React, { useContext, useState } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import TaskItem from './TaskItem';
import SearchBar from './SearchBar';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  const [filter, setFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTasks =
    filter === 'All'
      ? tasks
      : filter === 'Completed'
      ? tasks.filter((task) => task.completed)
      : tasks.filter((task) => !task.completed);

  const categorizedTasks =
    categoryFilter === 'All'
      ? filteredTasks
      : filteredTasks.filter((task) => task.category === categoryFilter);

  const searchedTasks = categorizedTasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="task-list">
      <SearchBar onSearch={(term) => setSearchTerm(term.toLowerCase())} />
      <div className="filter-controls">
        <div className="filter-buttons">
          <button
            className={filter === 'All' ? 'active' : ''}
            onClick={() => setFilter('All')}
          >
            All
          </button>
          <button
            className={filter === 'Pending' ? 'active' : ''}
            onClick={() => setFilter('Pending')}
          >
            Pending
          </button>
          <button
            className={filter === 'Completed' ? 'active' : ''}
            onClick={() => setFilter('Completed')}
          >
            Completed
          </button>
        </div>
        <div className="category-filter">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option>All</option>
            <option>Personal</option>
            <option>Work</option>
            <option>Urgent</option>
          </select>
        </div>
      </div>
      {searchedTasks.length > 0 ? (
        searchedTasks.map((task) => <TaskItem key={task.id} task={task} />)
      ) : (
        <p>No tasks match your criteria.</p>
      )}
    </div>
  );
};

export default TaskList;
