import store from "../store/store";
import { USER_ACTIONS } from "./constActions";

export const saveUser = (apiEmail: string, apiPassword: string) => {
  const user = {
    email: apiEmail,
    password: apiPassword,
  };
  store.dispatch({ type: USER_ACTIONS.USER_SAVE, payload: user });
};

export const removeUser = () => {
  store.dispatch({ type: USER_ACTIONS.USER_REMOVE });
};
