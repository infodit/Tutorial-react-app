import { useState } from "react";
import { Task } from "../types/task";
import { TaskList } from "../types/taskList";
import { TaskListFunctions } from "../types/TaskListFunctions";

export function useTaskListFucntions(initialTaskList: TaskList): TaskListFunctions {
    const [tasks, setTasks] = useState<Task[]>(initialTaskList)
    const [CounterId, setCounterId] = useState<number>(initialTaskList.length)

    const addTask = (name: string) => {
        const newTask: Task = {
            id: `task-${CounterId}`,
            name,
            completed: false,
        }
        setTasks([...tasks, newTask])
        setCounterId(CounterId + 1)
    }


    const deleteTask = (id: string) => {
        const taskRemaing = tasks.filter((task) => task.id !== id)
        setTasks(taskRemaing)
    }

    const toggleTaskCompleted = (id: string) => {
        const updateTakss = tasks.map((task) => {
            if (id === task.id) {
                return { ...task, completed: !task.completed }
            }
            return task
        })
        setTasks(updateTakss)
    }

    return {
        tasks,
        addTask,
        deleteTask,
        toggleTaskCompleted
        
    }
}

