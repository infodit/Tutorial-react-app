import { Task } from "./task";


export type TaskListFunctions = {
    tasks: Task[];
    deleteTask: (id: string) => void;
    toggleTaskCompleted: (id: string) => void;
};
