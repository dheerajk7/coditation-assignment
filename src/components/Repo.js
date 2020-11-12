import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/User.css';
import '../styles/Repo.css';
import { searchRepoDetail, clearRepoDetail } from '../actions/repo';
import { connect } from 'react-redux';

function Repo(props) {
  useEffect(() => {
    console.log(props.match.params);
    props.dispatch(
      searchRepoDetail(
        props.match.params.username,
        props.match.params.repositoryName
      )
    );
    return () => {
      props.dispatch(clearRepoDetail());
    };
  }, []);

  const { repoDetail, commitsList } = props;
  return (
    <div className="container user-detail-container">
      <div className="repo-heading">Repository Detail</div>
      <div className="upper-container">
        <div className="image-container">
          <img src={repoDetail.owner.avatar_url} alt="avatar"></img>
        </div>
        <div className="user-info-detail-container">
          <span className="username">{repoDetail.name}</span>
          <span className="github-link">
            <Link to={'/user/' + repoDetail.owner.login}>
              {repoDetail.owner.login}
            </Link>
          </span>
          <span className="github-link">
            <a href={repoDetail.html_url}>{repoDetail.full_name}</a>
          </span>
        </div>
      </div>
      {repoDetail.description !== null && (
        <div className="user-bio">
          <span className="heading-text">Description</span>
          <span>{repoDetail.description}</span>
        </div>
      )}

      <div className="follower-detail-container">
        <div className="followers">
          <span className="heading-text">Forks</span>
          <span className="detail-text">{repoDetail.forks}</span>
        </div>
        <div className="following">
          <span className="heading-text">Issues</span>
          <span className="detail-text">{repoDetail.open_issues}</span>
        </div>
        <div className="repositories">
          <span className="heading-text">Commits</span>
          <span className="detail-text">{commitsList.length}</span>
        </div>
      </div>

      <ul className="repo-list">
        <div className="repo-heading">
          <span>Commits</span>
          <span>Date</span>
        </div>
        {commitsList.map((commit) => {
          return (
            <li className="commit-item" key={commit.node_id}>
              <span>{commit.commit.message}</span>
              <span>{commit.commit.committer.date.substring(0, 10)}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    repoDetail: state.repository.activeRepo,
    commitsList: state.repository.commitsList,
  };
}

export default connect(mapStateToProps)(Repo);
