import {
  AUTH_ACTIONS,
  USER_ACTIONS,
  DATA_ACTIONS,
} from "../actions/constActions";
import { combineReducers } from "redux";

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

export const userReducer = (
  state: any = { email: "", password: "" },
  action: any
) => {
  switch (action.type) {
    case USER_ACTIONS.USER_SAVE:
      return {
        email: action.payload.email,
        password: action.payload.password,
      };
    case USER_ACTIONS.USER_REMOVE:
      return { email: "", password: "" };
    default:
      return state;
  }
};

export const dataReducer = (state: any = { employees: [{}] }, action: any) => {
  switch (action.type) {
    case DATA_ACTIONS.DATA_GET:
      return {
        employees: [
          ...state,
          {
            id: action.payload.id,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            seniority: action.payload.seniority,
            dateOfBirth: action.payload.dateOfBirth,
            engagement: action.payload.engagement,
          },
        ],
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  authReducer,
  userReducer,
  dataReducer,
});
