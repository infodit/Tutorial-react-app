import { ReactNode, useEffect } from "react";
import TaskContext from "../context/taskContext";
import { useTaskListFunctions } from "../../hooks/useTaskListFunctions";

function TaskProvider({ children }: { children: ReactNode }) {

    const {tasks,addTask,deleteTask,editTask,toggleTaskCompleted} = useTaskListFunctions()

    useEffect(() => {
        console.log(tasks);
    },[tasks])
    return (
        <TaskContext.Provider
            value={
                { tasks, addTask, deleteTask, editTask,toggleTaskCompleted }
            }>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider