import actions from './actionTypes';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { registered: true, user } : {};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.REGISTER_REQUEST:
      return {
        registering: true,
        user: action.user,
      };
    case actions.REGISTER_SUCCESS:
      return {
        registered: true,
        user: action.user,
      };
    case actions.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
};
