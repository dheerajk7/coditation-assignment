import { SET_REPO_DETAIL } from '../actions/actionTypes';

const initialState = {
  activeRepo: { owner: {} },
  commitsList: [],
};

export default function repository(state = initialState, action) {
  switch (action.type) {
    // setting repository detail in store
    case SET_REPO_DETAIL: {
      return {
        ...state,
        activeRepo: action.repoDetail,
        commitsList: action.commitsList,
      };
    }
    default: {
      return state;
    }
  }
}
