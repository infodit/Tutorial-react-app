import { ReactNode } from "react";
import TaskContext from "../context/taskContext";
import { useTaskListFunctions } from "../../hooks/useTaskListFunctions";

function TaskProvider({ children }: { children: ReactNode }) {

    const {tasks,addTask,deleteTask,toggleTaskCompleted} = useTaskListFunctions()

    return (
        <TaskContext.Provider
            value={
                { tasks, addTask, deleteTask, toggleTaskCompleted }
            }>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider