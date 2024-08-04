import React from 'react';

const Search = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div>
      <input
      className='rounded-md'
        type="text"
        placeholder="  Search tasks"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
