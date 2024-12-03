import { Dispatch, SetStateAction } from "react";
import { Task } from "./task";

export const FILTER_TASK_MAP = {
    All: () => true,
    Active: (task: Task) => !task.completed,
    Completed: (task: Task) => task.completed,
}
export type TaskFilterPros = {
    filter: FilterTaskKey
    FILTER_NAMES: FilterTaskKey[];
    setFilter: Dispatch<SetStateAction<FilterTaskKey>>;
}

export type Filter = {
    key:string;
    name:string
}

export type FilterButtonProps = {
    filter:Filter
    isPressed:boolean
    setFilter:Dispatch<SetStateAction<FilterTaskKey>>
  }

export type FilterTaskKey = keyof typeof FILTER_TASK_MAP

