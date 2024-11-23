import './App.css'
import taskList_init from './types/taskList'
import TaskListUI from './components/ui/taskList/taskList'


function App() {

  return (
    <TaskListUI tasks={taskList_init} />
  )
}

export default App