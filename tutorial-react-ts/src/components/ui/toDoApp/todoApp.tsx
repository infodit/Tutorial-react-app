import taskList_init from "../../taskList_init"
import TaskListUI from "./taskList/taskList"
import './todoApp.css'

function ToDoApp() {

    //Implements get list exist

    //Initialized default tasklist 
    const taskList = taskList_init



    return (
        <div id="todoApp">
            <TaskListUI tasks={taskList} />
        </div>
    )
}

export default ToDoApp