import {
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  TASK_STATUS_SELECTED,
} from "../actions/task.action";

import { Task } from "@/src/types/types";

import { Data } from "@/src/assets/data/data";

interface TaskState {
  tasks: Task[];
  selected_task: Task | null;
  filtered_tasks_new: Task[];
  filtered_tasks_inProgress: Task[];
  filtered_tasks_completed: Task[];
}

const initialState: TaskState = {
  tasks: Data,
  selected_task: null,
  filtered_tasks_new: [],
  filtered_tasks_inProgress: [],
  filtered_tasks_completed: [],
};

export const taskReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TASK_STATUS_SELECTED:
      let filteredTasksNew: Task[] = state.tasks.filter(
        (task) => task.status === "new"
      );
      let filteredTasksInProgress: Task[] = state.tasks.filter(
        (task) => task.status === "inProgress"
      );
      let filteredTasksCompleted: Task[] = state.tasks.filter(
        (task) => task.status === "completed"
      );

      return {
        ...state,
        filtered_tasks_new: filteredTasksNew,
        filtered_tasks_inProgress: filteredTasksInProgress,
        filtered_tasks_completed: filteredTasksCompleted,
      };
    default:
      return state;
  }
};
