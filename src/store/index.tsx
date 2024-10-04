import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { taskReducer } from "./reducers/task.reducer";

const rootReducer = combineReducers({
  task: taskReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
