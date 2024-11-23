// import { GenerateTSXFromList } from "../../factories/generateJSXFromList"
import { GenerateJSXFromList } from "../../factories/generateJSXFromList"
import { TaskList } from "../../../types/taskList"
import './taskList.css'

export type TaskListUIProps = {
    tasks:TaskList
}

function TaskListUI(taskList: TaskListUIProps) {
    const TaskListTSX = GenerateJSXFromList(taskList.tasks)
    
    
    return (
        <div id="taskListUI">
            {TaskListTSX}
        </div>
    )
}

export default TaskListUI


