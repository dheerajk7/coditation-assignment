import '../styles/Search.css';
import React, { useState } from 'react';
import { showAlert } from '../helpers/alerts';
import { connect } from 'react-redux';
import { searchUser } from '../actions/users';

function Search(props) {
  const [searchInput, setSearchInput] = useState('');

  function handleButtonClick() {
    if (searchInput.length === 0) {
      showAlert('Invalid', 'Search Input is Empty', 'warning');
      return;
    }
    props.dispatch(searchUser(searchInput));
    console.log(props, props.dispatch, 'searcInput');
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

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Search);
