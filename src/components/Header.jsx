import React, { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [name, setName] = useState('');
  const [tempName, setTempName] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setName(storedName);
    }
  }, []);

  const handleNameSubmit = () => {
    if (tempName.trim()) {
      localStorage.setItem('userName', tempName.trim());
      setName(tempName.trim());
    }
  };

  return (
    <header className="header">
      <h1>My To-Do App</h1>
      <div className="header-right">
        {name ? (
          <div className="user-name">Hello, {name}</div>
        ) : (
          <div className="name-input">
            <input
              type="text"
              placeholder="Enter your name"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
            />
            <button onClick={handleNameSubmit}>Save</button>
          </div>
        )}
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
