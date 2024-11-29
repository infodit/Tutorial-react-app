import { Task } from "./task";

export type TaskFormFunctions = {
    tasks: Task[];
    addTask: (name: string) => void;
};