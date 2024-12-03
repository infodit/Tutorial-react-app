import { createContext } from "react";
import { TaskContextProps } from "../../types/taskContextProps";

const TaskContext = createContext<TaskContextProps>(
    {
        tasks: [],
        filter: 'All',
        setFilter: () => {},
        // filter_functions: {
        //     FILTER_MAP: {
        //         All: () => true,
        //         Active: () => false,
        //         Completed: () => false
        //     },
        //     FILTER_NAMES: [],
        //     setFilter: () => { },
        //     filter: "All"
        // },
        addTask: () => {},
        deleteTask: () => {},
        editTask: () => {},
        toggleTaskCompleted: () => {}
    }
)

export default TaskContext