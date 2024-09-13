import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import taskReducer from "./reducers/taskReducer";

const rootReducer = combineReducers({
  task: taskReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
export type RootState = ReturnType<typeof rootReducer>;
