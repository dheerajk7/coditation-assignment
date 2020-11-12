import {} from '../actions/actionTypes';

const initialState = {
  activeRepo: {},
};

export default function repository(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
