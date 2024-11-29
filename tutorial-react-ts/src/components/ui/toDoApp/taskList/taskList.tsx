import { GenerateJSXFromList } from "../../../factories/generateJSXFromList"
import './taskList.css'

function TaskListUI() {
    const TaskListTSX = GenerateJSXFromList()
    
    
    return (
        <div id="taskListUI">
            {TaskListTSX}
        </div>
    )
}

export default TaskListUI


