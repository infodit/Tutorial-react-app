import { Task } from "./task";

export type TaskList = Task[]

const taskList_init:TaskList = [
    {
        id: "task-0",
        name: "Breakfast",
        completed: true
    },
    {
        id: "task-1",
        name: "Lunch",
        completed: false
    }
] 

export default taskList_init