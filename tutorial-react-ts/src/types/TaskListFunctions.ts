import { Task } from "./task";


export type TaskListFunctions = {
    tasks: Task[];
    addTask:(name:string) => void;
    deleteTask: (id: string) => void;
    editTask: (id: string, newName:string) => void;
    toggleTaskCompleted: (id: string) => void;
};
