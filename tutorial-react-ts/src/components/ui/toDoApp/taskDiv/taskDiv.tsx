import { TaskDivProps } from '../../../../types/taskDivProps'
import './taskDiv.css'
import useTaskDivFunctions from '../../../../hooks/useTaskDivFunctions';
import TaskDivTemplate from './taskDivTemplate';


function TaskDiv(props: TaskDivProps) {

    const { isEditing,newName,handleNameChange,handleBlur,setEditing} = useTaskDivFunctions(props)

    const templates = TaskDivTemplate(props.task.name,newName,handleNameChange,handleBlur,setEditing);

    return (
        <div className="Task">
            <div>
                <input type="checkbox" name={props.task.name} id={props.task.id} onChange={() => props.toggleTaskCompleted}
                />
            </div>
            {isEditing ? templates.editingTemplate : templates.viewedTemplate}
            <div>
                <button onClick={() => props.deleteTask(props.task.id)}>
                    Delete
                </button>
            </div>
        </div>
    )

}

export default TaskDiv