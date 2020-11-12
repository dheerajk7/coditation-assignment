import { UPDATE_USER_LIST } from '../actions/actionTypes';
import { APIUrls } from '../helpers/urls';

function updateUserList(userList) {
  return {
    type: UPDATE_USER_LIST,
    userList,
  };
}

export function searchUser(pattern) {
  return async (dispatch) => {
    const url = APIUrls.searchUser(pattern);
    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(updateUserList(data.items));
      });
  };
}
