import { useTaskFormFunctions } from "../../../../hooks/useTaskFormFunctions";
import './taskForm.css'

function TaskForm() {

    const {name,handleChange,handleSubmit} = useTaskFormFunctions()

    return (
        <div id="taskForm">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="task_input"
                    id="task_input"
                    value={name}
                    onChange={handleChange}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default TaskForm