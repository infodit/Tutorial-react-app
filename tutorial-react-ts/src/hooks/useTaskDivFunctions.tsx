import { useContext, useState } from "react";
import TaskContext from "../components/context/taskContext";
import { TaskDivProps } from "../types/taskDivProps";

function useTaskDivFunctions(props:TaskDivProps): { isEditing: boolean; newName: string; handleBlur: () => void; handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void; setEditing: React.Dispatch<React.SetStateAction<boolean>> } {
    const { editTask } = useContext(TaskContext)

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

export default useTaskDivFunctions