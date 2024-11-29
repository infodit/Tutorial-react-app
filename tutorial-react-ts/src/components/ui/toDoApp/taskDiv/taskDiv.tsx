import { TaskDivProps } from '../../../../types/taskDivProps'
import './taskDiv.css'

function TaskDiv(props: TaskDivProps) {
    return (
        <div className="Task">
            <div>
                <input type="checkbox" name={props.task.name} id={props.task.id} onChange={() => props.toggleTaskCompleted}
                    />
                <label htmlFor={props.task.id} >{props.task.name}</label>
            </div>
            <div>
                <button onClick={() => props.deleteTask(props.task.id)}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default TaskDiv