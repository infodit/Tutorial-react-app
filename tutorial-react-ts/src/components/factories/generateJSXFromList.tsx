import { useContext } from "react"
import TaskDiv from "../ui/toDoApp/taskDiv/taskDiv"
import TaskContext from "../context/taskContext"
import { useTaskListFunctions } from "../../hooks/useTaskListFunctions"
import { FILTER_TASK_MAP } from "../../types/taskFilterProps"


export function GenerateJSXFromList() {
    const {tasks,filter} = useContext(TaskContext)

    const {deleteTask,editTask,toggleTaskCompleted}= useTaskListFunctions()

    return tasks
        .filter(FILTER_TASK_MAP[filter])
        .map((task) => (
        <TaskDiv
            task={task}
            key={task.id}
            deleteTask={deleteTask}
            editTask={editTask}
            toggleTaskCompleted={toggleTaskCompleted}
        />
    ))
}