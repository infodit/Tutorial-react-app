import { createContext } from "react";
import { TaskContextProps } from "../../types/taskContextProps";

const TaskContext = createContext<TaskContextProps>(
    {
        tasks: [],
        filter: "All",
        setFilter: () => {},
        taskDispatch: () => { },
    }
)
export default TaskContext