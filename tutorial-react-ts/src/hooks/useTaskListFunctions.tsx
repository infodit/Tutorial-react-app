import { useState } from "react";
import { Task } from "../types/task";
import { TaskList } from "../types/taskList";
import { TaskListFunctions } from "../types/TaskListFunctions";

export function useTaskListFunctions(taskList: TaskList): TaskListFunctions {
    // State to store the list of tasks, initialized with the provided task list
    const [tasks, setTasks] = useState<Task[]>(taskList);

    // Function to delete a task by its ID
    const deleteTask = (id: string) => {
        // Filter out the task with the given ID
        const taskRemaining = tasks.filter((task) => task.id !== id);
        // Update the state with the remaining tasks
        setTasks(taskRemaining);
    };

    // Function to toggle the completion status of a task by its ID
    const toggleTaskCompleted = (id: string) => {
        // Map through the tasks and toggle the completed status of the matching task
        const updatedTasks = tasks.map((task) => {
            if (id === task.id) {
                // Create a new task object with the updated completed status
                return { ...task, completed: !task.completed };
            }
            // Return the task as is if it doesn't match the ID
            return task;
        });
        // Update the state with the updated tasks
        setTasks(updatedTasks);
    };

    // Return the tasks and the functions to manipulate the task list
    return {
        tasks,              // Current list of tasks          
        deleteTask,         // Function to delete a task
        toggleTaskCompleted // Function to toggle a task's completion status
    };
}


