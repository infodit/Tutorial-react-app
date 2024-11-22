import { Task } from '../../factories/task'
import './taskDiv.css'

function TaskDiv(props: Task) {
    return (
        <div className="Task">
            <div>
                <input type="checkbox" name={props.name} id={props.id}
                    />
                <label htmlFor={props.id}>{props.name}</label>
            </div>
            <div>
                <button>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default TaskDiv