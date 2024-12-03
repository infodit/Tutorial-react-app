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
        setTasks((currentTasks) => [
            ...currentTasks,
            { id: `task-${CounterId}`, name, completed: false },
        ]);
        setCounterId(CounterId + 1)
    };

    const deleteTask = (id: string) => {
        setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
    };

    const toggleTaskCompleted = (id: string) => {
        const updatedTasks = tasks.map((task) => {
            // if this task has the same ID as the edited task
            if (id === task.id) {
              // use object spread to make a new object
              // whose `completed` prop has been inverted
              return { ...task, completed: !task.completed };
            }
            return task;
          });
          setTasks(updatedTasks);
    };

    const editTask = (id: string, newName: string) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, name: newName } : task
        );
        setTasks(updatedTasks)
    }

    // Return the tasks and the functions to manipulate the task list
    return {
        tasks,              // Current list of tasks  
        addTask,            // Function to add a task
        deleteTask,         // Function to delete a task
        editTask,           // Function to edit a task
        toggleTaskCompleted // Function to toggle a task's completion status
    };
}


