import TaskProvider from "../../provider/taskProvider"
import ListFilterBtn from "./listFilterBtn/listFilterBtn"
import TaskForm from "./taskForm/taskForm"
import TaskListUI from "./taskList/taskList"
import './todoApp.css'

function ToDoApp() {

    return (
        <TaskProvider>
            <div id="todoApp">
                <TaskForm />
                <ListFilterBtn />
                <TaskListUI />
            </div>
        </TaskProvider>
    )
}

export default ToDoApp