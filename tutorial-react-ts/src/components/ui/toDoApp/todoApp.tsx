import TaskProvider from "../../provider/taskProvider"
import TaskForm from "./taskForm/taskForm"
import TaskListUI from "./taskList/taskList"
import './todoApp.css'

function ToDoApp() {

    return (
        <TaskProvider>
            <div id="todoApp">
                <TaskForm />
                <TaskListUI />
            </div>
        </TaskProvider>
    )
}

export default ToDoApp