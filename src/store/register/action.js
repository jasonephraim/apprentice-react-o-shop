import actionTypes from './actionTypes';
import { userService } from '../../services/userService';
import history from '../../utils/history';
import routePaths from '../../constants/routePaths';

export const registerActions = {
  register,
};

function register(firstName, lastName, username, password) {
  return (dispatch) => {
    dispatch({ type: actionTypes.REGISTER_REQUEST, user: { username } });

    userService.register(firstName, lastName, username, password).then(
      (user) => {
        dispatch({ type: actionTypes.REGISTER_SUCCESS, user });
        history.push(routePaths.login);
      },
      (error) => {
        console.log(error);
        dispatch({ type: actionTypes.REGISTER_FAILURE, error });
      }
    );
  };
}
