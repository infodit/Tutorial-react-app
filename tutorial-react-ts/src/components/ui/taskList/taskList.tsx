import { GenerateTSXFromList } from "../../factories/generateJSXFromList"
import { TaskList } from "../../factories/taskList"

export type TaskListUI = {
    tasks:TaskList
}

function TaskListUI(taskList: TaskListUI) {
    const TaskListTSX = GenerateTSXFromList(taskList.tasks)
    
    return (
        <div>
            {TaskListTSX}
        </div>
    )
}

export default TaskListUI


