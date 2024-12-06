import { Dispatch } from "react"
import { TaskAction } from "../components/constants/taskConst"
import { Task } from "./task"
import { FilterTaskKey } from "./taskFilterProps"

export type TaskContextProps = {
    tasks:Task[],
    filter:FilterTaskKey,
    setFilter:React.Dispatch<React.SetStateAction<FilterTaskKey>>
    taskDispatch:Dispatch<TaskAction> 
}
