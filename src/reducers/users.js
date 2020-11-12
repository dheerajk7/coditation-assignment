import { UPDATE_USER_LIST, SET_USER_DETAIL } from '../actions/actionTypes';

// component reducer initial state to render menu component on loading IPOD
const initialState = {
  userList: [],
  activeUser: {},
  activeUserRepoList: [],
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_LIST: {
      return {
        ...state,
        userList: action.userList,
      };
    }
    case SET_USER_DETAIL: {
      return {
        ...state,
        activeUser: action.userDetail,
        activeUserRepoList: action.repoList,
      };
    }
    default: {
      return state;
    }
  }
}
