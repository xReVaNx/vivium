import store from "../store/store";
import { DATA_ACTIONS } from "./constActions";

export const saveData = (
  dataId: number,
  dataFirstName: string,
  dataLastName: string,
  dataSeniority: number,
  dataDateOfBirth: string,
  dataEngagement: number
) => {
  const data = {
    id: dataId,
    firstName: dataFirstName,
    lastName: dataLastName,
    seniority: dataSeniority,
    dateOfBirth: dataDateOfBirth,
    engagement: dataEngagement,
  };
  store.dispatch({ type: DATA_ACTIONS.DATA_GET, payload: data });
};
