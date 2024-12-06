import { nanoid } from "nanoid";
import { TaskAction } from "../constants/taskConst";
import { Task } from "../../types/task";

export const TaskReducer = (tasks: Task[], action: TaskAction): Task[] => {
    switch (action.type) {
        case 'ADD_TASK':
            {
                const newTask: Task = {
                    id: nanoid(),
                    name: action.payload.name,
                    completed: false
                }
                return [...tasks, newTask]
            }
        case 'DELETE_TASK':
            {
                const tasksRemaining = tasks.filter((task) => task.id !== action.payload.id)
                return tasksRemaining
            }
        case 'TOGGLE_TASK':
            {
                const updateTasks = tasks.map((task) =>
                    task.id === action.payload.id ? { ...task, completed: !task.completed } : task
                )
                return updateTasks
            }
        case 'EDIT_TASK':
            {
                const editedTask = tasks.map((task) =>
                    task.id === action.payload.id ? { ...task, name: action.payload.newName } : task
                )
                return editedTask
            }
        default:
            return tasks

    }
}

