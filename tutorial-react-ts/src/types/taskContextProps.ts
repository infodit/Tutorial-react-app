import { TaskList } from "./taskList"

export type TaskContextProps = {
    tasks:TaskList
    addTask:(name:string) =>  void
    deleteTask:(id:string) =>  void
    toggleTaskCompleted:(id:string) =>  void
}
