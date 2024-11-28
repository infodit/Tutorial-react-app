import { useTaskListFunctions } from "../../hooks/useTaskListFunctions"
import { TaskList } from "../../types/taskList"
import TaskDiv from "../ui/taskDiv/taskDiv"


export function GenerateJSXFromList(tasklist: TaskList) {
    const ts = useTaskListFunctions(tasklist)

    return ts.tasks.map((task) => (
        <TaskDiv
            task={task}
            key={task.id}
            deleteTask={ts.deleteTask}
            toggleTaskCompleted={ts.toggleTaskCompleted}
        />
    ))
}