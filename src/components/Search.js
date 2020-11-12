import '../styles/Search.css';
import React, { useState } from 'react';
import showAlert from '../helpers/alert';

function Search(props) {
  const [searchInput, setSearchInput] = useState('');

  function handleButtonClick() {
    console.log(searchInput, 'searcInput');
  }

  return (
    <div className="search">
      <input
        placeholder="Search"
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      ></input>
      <button onClick={handleButtonClick}>
        <i value={searchInput} className="fa fa-search" aria-hidden="true"></i>
      </button>
    </div>
  );
}

export default Search;
