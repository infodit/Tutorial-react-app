import { useState } from "react";
import { TaskList } from "../types/taskList";
import { Task } from "../types/task";

export function useTaskFormFunctions(taskList: TaskList) {
    // State to store the list of tasks, initialized with the provided task list
    const [tasks, setTasks] = useState<Task[]>(taskList);
    // State to track the counter used for generating unique task IDs
    const [CounterId, setCounterId] = useState<number>(taskList.length);

    // Function to add a new task to the task list
    const addTask = (name: string) => {
        // Create a new task object
        const newTask: Task = {
            id: `task-${CounterId}`, // Generate a unique ID for the task
            name,                    // Task name from the parameter
            completed: false,        // New tasks are not completed by default
        };
        // Update the task list with the new task
        setTasks([...tasks, newTask]);
        // Increment the counter for the next task ID
        setCounterId(CounterId + 1);
    };

    return {
        tasks,
        addTask
    }

}