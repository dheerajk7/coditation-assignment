import {} from '../actions/actionTypes';

// component reducer initial state to render menu component on loading IPOD
const initialState = {
  userList: [],
  activeUser: {},
};

export default function users(state = initialState, action) {
  switch (action.type) {
    // case CHANGE_COMPONENT: {
    //   // if we are changing active component to menu then we need to change active item to coverflow
    //   if (action.component === 'Menu') {
    //     return {
    //       ...state,
    //       activeComponent: action.component,
    //       activeItem: 'Coverflow',
    //     };
    // }
    default: {
      return state;
    }
  }
}
