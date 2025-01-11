import { ChangeEventHandler, SetStateAction } from "react";

function TaskDivTemplate(
    taskName: string,
    _newName: string,
    handleNameChange: ChangeEventHandler<HTMLDivElement>,
    handleBlur: () => void,
    setEditing: (value: SetStateAction<boolean>) => void
) {

    const editingTemplate = (
        <div
            contentEditable
            suppressContentEditableWarning
            onInput={handleNameChange}
            onBlur={handleBlur}
            style={{
                border: '1px solid #ccc',
                padding: '10px',
                minHeight: '40px',
                backgroundColor: '#f9f9f9',
              }}
        >{taskName}</div>
    );

    const viewedTemplate = (
        <div onClick={() => setEditing(true)}>{taskName}</div>
    );
    return { editingTemplate, viewedTemplate };
}
export default TaskDivTemplate