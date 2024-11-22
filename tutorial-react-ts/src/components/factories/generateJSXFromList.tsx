import { TaskList } from "../factories/taskList"
import TaskDiv from "../ui/task/taskDiv"




export function GenerateTSXFromList(tasks: TaskList) {
    return tasks.map((task) => (
        <TaskDiv
        id={task.id}
        name={task.name}
        completed={task.completed} />
    ))
}