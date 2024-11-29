import { useState } from "react";
import { Task } from "../types/task";
import { TaskListFunctions } from "../types/TaskListFunctions";
import taskList_init from "../components/taskList_init";

export function useTaskListFunctions(): TaskListFunctions {
    // State to store the list of tasks, initialized with the provided task list
    const [tasks, setTasks] = useState<Task[]>(taskList_init);
    // State to track the counter used for generating unique task IDs
    const [CounterId, setCounterId] = useState<number>(taskList_init.length);

    const addTask = (name: string) => {
        setTasks((prevTasks) => [
            ...prevTasks,
            { id: `task-${CounterId}`, name, completed: false },
        ]);
        setCounterId(CounterId + 1)
    };

    const deleteTask = (id: string) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    const toggleTaskCompleted = (id: string) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    // Return the tasks and the functions to manipulate the task list
    return {
        tasks,              // Current list of tasks  
        addTask,        
        deleteTask,         // Function to delete a task
        toggleTaskCompleted // Function to toggle a task's completion status
    };
}


