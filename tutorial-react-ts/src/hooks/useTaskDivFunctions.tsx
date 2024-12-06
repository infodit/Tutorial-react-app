import { useState } from "react";
import { TaskDivProps } from "../types/taskDivProps";
import { useTaskListFunctions } from "./useTaskListFunctions";

export function useTaskDivFunctions(props:TaskDivProps) {
    const { editTask } = useTaskListFunctions()

    const [isEditing, setEditing] = useState(false)
    const [newName, setNewName] = useState(props.task.name)

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(e.target.value);
    }
    const handleBlur = () => {
        editTask(props.task.id, newName)
        setEditing(false)
    }

    return {
        isEditing,
        newName,
        handleBlur,
        handleNameChange,
        setEditing
    }
}
