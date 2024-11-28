import { Task } from "./task"

export type TaskDivProps = {
    task:Task
    deleteTask:(id:string) =>  void
    toggleTaskCompleted:(id:string) =>  void
}