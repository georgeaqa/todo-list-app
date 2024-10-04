export const TASK_STATUS_SELECTED = "TASK_STATUS_SELECTED";
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";

export const task_status_selected = (status: string) => {
  return {
    type: TASK_STATUS_SELECTED,
    payload: status,
  };
};
