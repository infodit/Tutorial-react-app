// export const REMOVE_ALL_TASKS = "REMOVE_ALL_TASKS";
// export const TOGGLE_ALL = "TOGGLE_ALL";
// export const REMOVE_COMPLETED_TASKS = "REMOVE_COMPLETED_TASKS";

export type TaskAction = 
| { type: "ADD_TASK"; payload: {name:string}}
| { type: "DELETE_TASK"; payload: {id:string}}
| { type: "TOGGLE_TASK"; payload: {id:string}}
| { type: "EDIT_TASK"; payload: {id:string, newName:string}}
