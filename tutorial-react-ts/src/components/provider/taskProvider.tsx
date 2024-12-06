import { ReactNode, useEffect, useReducer, useState } from "react";
import TaskContext from "../context/taskContext";
import { TaskReducer } from "../reducer/taskReducer";
import taskList_init from "../constants/taskList_init";
import { FilterTaskKey } from "../../types/taskFilterProps";

function TaskProvider({ children }: { children: ReactNode }) {

    const [tasks,taskDispatch] = useReducer(TaskReducer,taskList_init)
    const [filter,setFilter] = useState<FilterTaskKey>('All')
    useEffect(() => {
        console.log(tasks);
    },[tasks])
    
    return (
        <TaskContext.Provider
            value={
                { 
                    tasks,filter,setFilter,taskDispatch
                }
            }>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider