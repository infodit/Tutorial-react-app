import { useContext, useState } from "react";
import { TaskFormFunctions } from "../types/taskFormFunctions";
import TaskContext from "../components/context/taskContext";

export function useTaskFormFunctions():TaskFormFunctions {
    
    const {addTask} = useContext(TaskContext)
    const [name, setName] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addTask(name);
        setName("");
    };

    return {
        name,
        handleChange,
        handleSubmit
    }

}