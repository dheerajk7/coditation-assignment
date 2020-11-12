import { useEffect } from 'react';
import { connect } from 'react-redux';
import { searchUserDetail, clearUserDetail } from '../actions/users';
import { Link } from 'react-router-dom';
import '../styles/User.css';

function User(props) {
  useEffect(() => {
    props.dispatch(searchUserDetail(props.match.params.username));
    return () => {
      props.dispatch(clearUserDetail());
    };
  }, []);

  const { userDetail, repoList } = props;
  return (
    <div className="container user-detail-container">
      <div className="upper-container">
        <div className="image-container">
          <img src={userDetail.avatar_url} alt="avatar"></img>
        </div>
        <div className="user-info-detail-container">
          <span className="username">{userDetail.name}</span>
          <span>{userDetail.login}</span>
          <span className="github-link">
            <a href={userDetail.html_url}>{userDetail.html_url}</a>
          </span>
        </div>
      </div>
      {userDetail.bio !== null && (
        <div className="user-bio">
          <span className="heading-text">Bio</span>
          <span>{userDetail.bio}</span>
        </div>
      )}

      <div className="follower-detail-container">
        <div className="followers">
          <span className="heading-text">Followers</span>
          <span className="detail-text">{userDetail.followers}</span>
        </div>
        <div className="following">
          <span className="heading-text">Following</span>
          <span className="detail-text">{userDetail.following}</span>
        </div>
        <div className="repositories">
          <span className="heading-text">Repositories</span>
          <span className="detail-text">{userDetail.public_repos}</span>
        </div>
      </div>

      <ul className="repo-list">
        <div className="repo-heading">Repositories</div>
        {repoList.map((repo) => {
          return (
            <li key={repo.id}>
              <Link to={'/' + userDetail.login + '/repository/' + repo.name}>
                {repo.name}
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
    userDetail: state.users.activeUser,
    repoList: state.users.activeUserRepoList,
  };
}
export default connect(mapStateToProps)(User);
