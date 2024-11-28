import { useState } from "react";
import { Task } from "../types/task";
import { TaskList } from "../types/taskList";
import { TaskListFunctions } from "../types/TaskListFunctions";

export function useTaskListFunctions(initialTaskList: TaskList): TaskListFunctions {
    // State to store the list of tasks, initialized with the provided task list
    const [tasks, setTasks] = useState<Task[]>(initialTaskList);

    // State to track the counter used for generating unique task IDs
    const [CounterId, setCounterId] = useState<number>(initialTaskList.length);

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
        addTask,            // Function to add a task
        deleteTask,         // Function to delete a task
        toggleTaskCompleted // Function to toggle a task's completion status
    };
}


