import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');

  const handleChange = (e) => {
    setKeyword(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search tasks..."
      value={keyword}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
