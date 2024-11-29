import { createContext } from "react";
import { TaskContextProps } from "../../types/taskContextProps";

const TaskContext = createContext<TaskContextProps>(
    {
        tasks: [],
        addTask: () => {},
        deleteTask: () => {},
        toggleTaskCompleted: () => {}
    }
)

export default TaskContext