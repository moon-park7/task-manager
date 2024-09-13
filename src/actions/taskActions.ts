import { Task } from "../types/taskTypes";

export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const EDIT_TASK = "EDIT_TASK";

export interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: Task;
}

export interface DeleteTaskAction {
  type: typeof DELETE_TASK;
  payload: number; //task id
}

export interface ToggleTaskAction {
  type: typeof TOGGLE_TASK;
  payload: number; //task id
}

export interface EditTaskAction {
  type: typeof EDIT_TASK;
  payload: Task;
}

export type TaskActionTypes =
  | AddTaskAction
  | DeleteTaskAction
  | ToggleTaskAction
  | EditTaskAction;

export const addTask = (task: Task): TaskActionTypes => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (id: number): TaskActionTypes => ({
  type: DELETE_TASK,
  payload: id,
});

export const toggleTask = (id: number): TaskActionTypes => ({
  type: TOGGLE_TASK,
  payload: id,
});

export const editTask = (task: Task): TaskActionTypes => ({
  type: EDIT_TASK,
  payload: task,
});
