import { Task } from "./task";


export type TaskListFunctions = {
    tasks: Task[];
    addTask: (name: string) => void;
    deleteTask: (id: string) => void;
    toggleTaskCompleted: (id: string) => void;
};
