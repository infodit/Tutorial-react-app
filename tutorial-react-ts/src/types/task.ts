export type Task = {
    id: string
    name: string
    completed: boolean
    addTask?:(name:string) => void,
    deleteTask?:(id:string) =>  void
    toggleTaskCompleted?:(id:string) =>  void
}