import { loginStart, loginSuccess, logoutUser } from './userRedux';

export const login = async (dispatch) => {
  dispatch(loginStart());
  dispatch(loginSuccess());
};

export const logout = async (dispatch) => {
  dispatch(logoutUser());
};
