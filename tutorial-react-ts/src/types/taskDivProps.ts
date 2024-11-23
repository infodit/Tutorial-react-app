import { Task } from "./task"

export type TaskDivProps = {
    task:Task
    addTask:(name:string) => void,
    deleteTask:(id:string) =>  void
    toggleTaskCompleted:(id:string) =>  void
}