import { APIUrls } from '../helpers/urls';
import { SET_REPO_DETAIL } from '../actions/actionTypes';

function setRepoDetail(repoDetail, commitsList) {
  return {
    type: SET_REPO_DETAIL,
    repoDetail,
    commitsList,
  };
}

export function clearRepoDetail() {
  return {
    type: SET_REPO_DETAIL,
    repoDetail: {
      owner: {},
    },
    commitsList: [],
  };
}

export function searchRepoDetail(username, repoName) {
  return async (dispatch) => {
    const url = APIUrls.searchRepoDetail(username, repoName);
    const commitsUrl = APIUrls.commitsUrl(username, repoName);
    let repoData = await fetch(url, {
      method: 'GET',
    }).then((response) => response.json());
    let commitsList = await fetch(commitsUrl, {
      method: 'GET',
    }).then((response) => response.json());
    dispatch(setRepoDetail(repoData, commitsList));
  };
}
