import { ReactNode, useEffect } from "react";
import TaskContext from "../context/taskContext";
import { useTaskListFunctions } from "../../hooks/useTaskListFunctions";
import useTaskFilterFunctions from "../../hooks/useTaskFilterFunctions";

function TaskProvider({ children }: { children: ReactNode }) {

    const {tasks,addTask,deleteTask,editTask,toggleTaskCompleted} = useTaskListFunctions()

    const {filter,setFilter} = useTaskFilterFunctions()
 
    useEffect(() => {
        console.log(tasks);
    },[tasks])
    
    return (
        <TaskContext.Provider
            value={
                { 
                    tasks,filter,                                             //Properties
                    setFilter,                                     //Filter Functions
                    addTask, deleteTask, editTask,toggleTaskCompleted         //Task Functions
                }
            }>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider