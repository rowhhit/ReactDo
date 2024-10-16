import React from 'react';
import TaskProvider from './contexts/TaskContext';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import TaskCounter from './components/TaskCounter';
import RecycleBin from './components/RecycleBin';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Reminders from './components/Reminders';

const App = () => {
  return (
    <TaskProvider>
      <Router>
        <Header />
        <Reminders />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTask />
                <TaskCounter />
                <TaskList />
                <Link to="/recycle-bin" className="recycle-link">
                  Go to Recycle Bin
                </Link>
              </>
            }
          />
          <Route path="/recycle-bin" element={<RecycleBin />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
};

export default App;
