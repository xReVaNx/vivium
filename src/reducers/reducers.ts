import { AUTH_ACTIONS } from "../actions/constActions";

export const authReducer = (state: any = { isAuth: false }, action: any) => {
  switch (action.type) {
    case AUTH_ACTIONS.AUTH_LOGIN:
      return { isAuth: true };
    case AUTH_ACTIONS.AUTH_LOGOUT:
      return { isAuth: false };
    default:
      return state;
  }
};
