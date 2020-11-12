import { UPDATE_USER_LIST, SET_USER_DETAIL } from '../actions/actionTypes';
import { APIUrls } from '../helpers/urls';
import { loadingStart, loadingStop } from '../actions/progress';

function updateUserList(userList) {
  return {
    type: UPDATE_USER_LIST,
    userList,
  };
}

export function searchUser(pattern) {
  return async (dispatch) => {
    dispatch(loadingStart());
    const url = APIUrls.searchUser(pattern);
    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(updateUserList(data.items));
        dispatch(loadingStop());
      });
  };
}

function setUserDetail(userDetail, repoList) {
  return {
    type: SET_USER_DETAIL,
    userDetail,
    repoList,
  };
}

export function clearUserDetail() {
  return {
    type: SET_USER_DETAIL,
    userDetail: {},
    repoList: [],
  };
}

export function searchUserDetail(username) {
  return async (dispatch) => {
    dispatch(loadingStart());
    const url = APIUrls.searchUserDetail(username);
    let userData = await fetch(url, {
      method: 'GET',
    }).then((response) => response.json());
    let repoList = await fetch(userData.repos_url, {
      method: 'GET',
    }).then((response) => response.json());
    dispatch(setUserDetail(userData, repoList));
    dispatch(loadingStop());
  };
}
