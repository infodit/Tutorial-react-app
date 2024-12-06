import { useContext } from "react";
import TaskContext from "../components/context/taskContext";

export function useTaskListFunctions() {
    const {taskDispatch} = useContext(TaskContext)

    const addTask = (name:string) => 
        taskDispatch({type:'ADD_TASK',payload: {name}})
    
    const deleteTask = (id:string) => 
        taskDispatch({type:'DELETE_TASK',payload:{id}})

    const toggleTaskCompleted = (id: string) => 
        taskDispatch({ type: 'TOGGLE_TASK', payload: { id } });

    const editTask = (id: string,newName: string) => 
        taskDispatch({ type: 'EDIT_TASK', payload: { id, newName } });

    return {
        addTask,            
        deleteTask,        
        editTask,           
        toggleTaskCompleted 
    };
}


