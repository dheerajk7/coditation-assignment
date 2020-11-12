import { APIUrls } from '../helpers/urls';
import { SET_REPO_DETAIL } from '../actions/actionTypes';
import { loadingStart, loadingStop } from '../actions/progress';

// action creator for setting repodetail in redux store
function setRepoDetail(repoDetail, commitsList) {
  return {
    type: SET_REPO_DETAIL,
    repoDetail,
    commitsList,
  };
}

// action creator to remove repodetail from redux store on component unmounting
export function clearRepoDetail() {
  return {
    type: SET_REPO_DETAIL,
    repoDetail: {
      owner: {},
    },
    commitsList: [],
  };
}

// action creator to get repodetail by using username and reponame from API
export function searchRepoDetail(username, repoName) {
  return async (dispatch) => {
    dispatch(loadingStart());
    const url = APIUrls.searchRepoDetail(username, repoName);
    const commitsUrl = APIUrls.commitsUrl(username, repoName);
    let repoData = await fetch(url, {
      method: 'GET',
    }).then((response) => response.json());
    let commitsList = await fetch(commitsUrl, {
      method: 'GET',
    }).then((response) => response.json());
    dispatch(setRepoDetail(repoData, commitsList));
    dispatch(loadingStop());
  };
}
