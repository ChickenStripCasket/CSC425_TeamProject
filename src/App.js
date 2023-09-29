import './App.css';
import EditModal from './EditModal';
import Header from './Header';
import Modal from './Modal';
import TaskCardGrid from './TaskCardGrid';
import Toolbar from './Toolbar.js';
import { useState } from 'react';
import TaskList from './TaskList'
import NewTaskModal from './NewTaskModal';

function App() {
  // the task that's currently being edited
  const [editTask, setEditTask] = useState(null)
  const [newTask, setNewTask] = useState(false)



  // the current task view mode
  const [gridViewMode, setGridViewMode] = useState(true)

  // I've put some random placeholder tasks here for now -Conner
  const [tasks, setTasks] = useState([])

  // show modal if editTask isn't null
  let completed = 0
  for(const task of tasks){
    if(task.completed)
      completed++
  }

  return (
    <main>
      {/* Show modal if editTask isn't null */}
      <EditModal editTask={editTask} onClose={() => {setEditTask(null)}} onSubmit={newTask => {
        let count=0
        for(const task of tasks){
          if(task.id == editTask.id){
            tasks[count] = newTask
          }
          count++
        }
        setTasks([...tasks])
      }} onDelete={() => {
        let count=0
        for(const task of tasks){
          if(task.id == editTask.id){
            tasks.splice(count, 1)
          }
          count++
        }
        setTasks([...tasks])
      }}/>
      <NewTaskModal visible={newTask} onClose={()=>setNewTask(false)} onSubmit={(newValue)=>{
        newValue.id = Math.floor(Math.random() * 1000)
        tasks.push(newValue)
        setTasks([...tasks])}}/>
      {/* Header */}
      <Header onClick={()=> setNewTask(true)}/>
      
      {/* Toolbar */}
      <section className='toolbar'>
        <Toolbar currentMode={gridViewMode} onViewToggle={state => setGridViewMode(state) } total={tasks.length} completed={completed} />
      </section>

      {/* List */}
      <ul className='list'>
        { 0 >= tasks.length ? <h3 className='display-small empty-text'>Add a task to begin</h3>
          : gridViewMode ? <TaskCardGrid tasks={tasks} onTaskEdit={toEditTask => setEditTask(toEditTask)} onTasksChange={newTasks => setTasks([...newTasks])}></TaskCardGrid>
            : <TaskList tasks={tasks} onTaskEdit={toEditTask => setEditTask(toEditTask)} onTasksChange={newTasks => setTasks([...newTasks])}/>}
      </ul>
    </main>
  );
}

export default App;
