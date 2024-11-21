import './task.css'

export type Task = {
    id: string
    name: string
    completed: boolean
}

function TaskDiv(props: Task) {
    return (
        <div className="Task">
            <div>
                <input type="checkbox" name={props.name} id={props.id}
                    />
                <label htmlFor="">{props.name}</label>
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