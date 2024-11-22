import './App.css'
import TaskListUI from './components/ui/taskList/taskList'

function App() {
  return (
    <TaskListUI tasks={[
      {
        id: 'task-0',
        name: 'Go to School',
        completed: false
      },
      {
        id: 'task-1',
        name: 'Launch',
        completed: false
      }
    ]} />
  )
}

export default App
