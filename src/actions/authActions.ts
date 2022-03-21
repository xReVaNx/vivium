import store from "../store/store";
import { AUTH_ACTIONS } from "./constActions";

export const authLogin = () => {
  store.dispatch({ type: AUTH_ACTIONS.AUTH_LOGIN });
};

export const authLogout = () => {
  store.dispatch({ type: AUTH_ACTIONS.AUTH_LOGOUT });
};
