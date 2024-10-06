import { create } from "zustand";
import { Task } from "@/src/types/types";
import { getRealTimeChanges, getTasks } from "@/src/services/taskService";

interface TaskState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
  getTasks: (user_Id: string) => Promise<void>;
  subscribeToRealTimeChanges: () => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  loading: false,
  error: null,
  getTasks: async (user_Id: string) => {
    set({ loading: true, error: null });
    try {
      const data = await getTasks({ user_Id });
      set({ tasks: data });
    } catch (err) {
      set({ error: "Failed to load tasks" });
    } finally {
      set({ loading: false });
    }
  },
  subscribeToRealTimeChanges: () => {
    const { unsubscribe } = getRealTimeChanges((payload) => {
      const { eventType, new: newTask, old: oldTask } = payload;
      set((state) => {
        switch (eventType) {
          case "INSERT":
            if (!state.tasks.some((task) => task.id === newTask.id)) {
              return { tasks: [newTask, ...state.tasks] };
            }
            return state;
          case "UPDATE":
            return {
              tasks: state.tasks.map((task) =>
                task.id === newTask.id ? newTask : task
              ),
            };
          case "DELETE":
            return {
              tasks: state.tasks.filter((task) => task.id !== oldTask.id),
            };
          default:
            return state;
        }
      });
    });

    return unsubscribe;
  },
}));
