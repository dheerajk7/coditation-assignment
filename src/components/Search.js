import '../styles/Search.css';
import React, { useState } from 'react';
import { showAlert } from '../helpers/alerts';
import { connect } from 'react-redux';
import { searchUser } from '../actions/users';

function Search(props) {
  // using state to manage input's value
  const [searchInput, setSearchInput] = useState('');

  // handling click button on search and pressing Enter button
  function handleButtonClick() {
    if (searchInput.length === 0) {
      showAlert('Invalid', 'Search Input is Empty', 'warning');
      return;
    }
    props.dispatch(searchUser(searchInput));
  }

  return (
    <div className="search">
      <input
        placeholder="Search"
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            handleButtonClick();
          }
        }}
      ></input>
      <button onClick={handleButtonClick}>
        <i value={searchInput} className="fa fa-search" aria-hidden="true"></i>
      </button>
    </div>
  );
}

// passing store info as props to component
// mainly to use dispatch inside component
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Search);
