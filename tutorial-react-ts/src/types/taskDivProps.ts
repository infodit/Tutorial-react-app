import { Task } from "./task"

export type TaskDivProps = {
    task:Task
    deleteTask:(id:string) =>  void
    editTask: (id: string, newName:string) => void;
    toggleTaskCompleted:(id:string) =>  void
}