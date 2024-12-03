import { FilterTaskKey } from "./taskFilterProps"
import { TaskList } from "./taskList"

export type TaskContextProps = {
    tasks:TaskList,
    filter:FilterTaskKey,
    setFilter: React.Dispatch<React.SetStateAction<FilterTaskKey>>;
    // filter_functions:TaskFilterPros
    addTask:(name:string) =>  void
    deleteTask:(id:string) =>  void
    editTask: (id: string, newName:string) => void
    toggleTaskCompleted:(id:string) =>  void
}
