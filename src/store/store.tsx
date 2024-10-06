import { create } from "zustand";
import createSelectors from "./selectors";
import { Task } from "@/src/types/types";
import { Data } from "@/src/assets/data/data";

interface TaskState {
  tasks: Task[];
  new_tasks: Task[];
  setNewTasks: () => void;
  inProgress_tasks: Task[];
  setInProgressTasks: () => void;
  completed_tasks: Task[];
  setCompletedTasks: () => void;
}

const useTaskStore = create<TaskState>((set) => ({
  tasks: Data,
  new_tasks: [],
  setNewTasks: () => {
    set((state) => ({
      new_tasks: state.tasks.filter((task) => task.status === "new"),
    }));
  },
  inProgress_tasks: [],
  setInProgressTasks: () => {
    set((state) => ({
      inProgress_tasks: state.tasks.filter(
        (task) => task.status === "inProgress"
      ),
    }));
  },
  completed_tasks: [],
  setCompletedTasks: () => {
    set((state) => ({
      completed_tasks: state.tasks.filter(
        (task) => task.status === "completed"
      ),
    }));
  },
}));

export const useTaskStoreSelectors = createSelectors(useTaskStore);
