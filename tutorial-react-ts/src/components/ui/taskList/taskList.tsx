import { GenerateJSXFromList } from "../../factories/generateJSXFromList"
import './taskList.css'
import { TaskListUIProps } from "../../../types/TaskListUIProps"

function TaskListUI(taskList: TaskListUIProps) {
    const TaskListTSX = GenerateJSXFromList(taskList.tasks)
    
    
    return (
        <div id="taskListUI">
            {TaskListTSX}
        </div>
    )
}

export default TaskListUI


