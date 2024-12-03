import { ChangeEventHandler, SetStateAction } from "react";

function TaskDivTemplate(
    taskName:string,
    newName: string,
    handleNameChange: ChangeEventHandler<HTMLInputElement>, 
    handleBlur: () => void,
    setEditing: (value: SetStateAction<boolean>) => void 
)
    {
    const editingTemplate = (
        <input className='inputEditingName'
            type="text"
            value={newName}
            onChange={handleNameChange}
            onBlur={handleBlur}
            autoFocus />
    );

    // const editingTemplate = (
    //     <div className='editableDiv'
    //         contentEditable
    //         suppressContentEditableWarning
    //         style={{border: isEditing ? 'none': 'none'}}
    //         onInput={handleNameChange}
    //         onBlur={handleBlur}
    //         autoFocus
    //     >
    //         {props.task.name}
    //     </div>
    // )
    const viewedTemplate = (
        <div onClick={() => setEditing(true)}>{taskName}</div>
        // <label htmlFor={props.task.id} onClick={()=> setEditing(true)}>{props.task.name}</label>
    );
    return { editingTemplate, viewedTemplate };
}
export default TaskDivTemplate