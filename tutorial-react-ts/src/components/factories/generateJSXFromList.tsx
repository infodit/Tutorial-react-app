import { useContext } from "react"
import TaskDiv from "../ui/toDoApp/taskDiv/taskDiv"
import TaskContext from "../context/taskContext"


export function GenerateJSXFromList() {
    const {tasks,deleteTask,toggleTaskCompleted} = useContext(TaskContext)

    return tasks.map((task) => (
        <TaskDiv
            task={task}
            key={task.id}
            deleteTask={deleteTask}
            toggleTaskCompleted={toggleTaskCompleted}
        />
    ))
}