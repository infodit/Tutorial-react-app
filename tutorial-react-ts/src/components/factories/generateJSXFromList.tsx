import { TaskList } from "../../types/taskList"
import TaskDiv from "../ui/taskDiv/taskDiv"
import { useTaskListFucntions } from "../../hooks/useTaskListFunctions"

export function GenerateJSXFromList(tasklist: TaskList) {
    const { tasks,addTask, deleteTask, toggleTaskCompleted } = useTaskListFucntions(tasklist)

    return tasks.map((task) => (
        <TaskDiv
            task={task}
            key={task.id}
            deleteTask={deleteTask}
            addTask={addTask}
            toggleTaskCompleted={toggleTaskCompleted}
        />
    ))
}