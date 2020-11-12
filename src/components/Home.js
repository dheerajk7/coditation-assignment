import { connect } from 'react-redux';
import Search from './Search';
import { Link } from 'react-router-dom';
import React from 'react';
import '../styles/Home.css';

function Home(props) {
  const { usersList } = props;
  return (
    <div className="container">
      <Search />
      <ul className="user-list">
        {usersList.map((user) => {
          return (
            <li key={user.id}>
              <img src={user.avatar_url} alt="avatar"></img>
              <div>
                <Link to={'/user/' + user.login}>
                  <h2>{user.login}</h2>
                </Link>
                <h5>Score : {user.score}</h5>
              </div>
              <Link to={'/user/' + user.login}>
                <button>View Profile</button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    usersList: state.users.userList,
  };
}

export default connect(mapStateToProps)(Home);
