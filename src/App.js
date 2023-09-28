import './App.css';
import EditModal from './EditModal';
import Header from './Header';
import Modal from './Modal';
import TaskCardGrid from './TaskCardGrid';
import Toolbar from './Toolbar.js';
import { useState } from 'react';
import TaskList from './TaskList'

function App() {
  const [editTask, setEditTask] = useState(null)
  // I've put some random placeholder tasks here for now -Conner
  const [tasks, setTasks] = useState([
    {
      "title": "Buy groceries",
      "dueDate": new Date("2023-09-25"),
      "completed": false,
      "description": "Purchase groceries for the week."
    },
    {
      "title": "Finish report",
      "dueDate": new Date("2023-09-23"),
      "completed": false,
      "description": "Complete and submit the quarterly report."
    },
    {
      "title": "Schedule dentist appointment",
      "dueDate": new Date("2023-09-28"),
      "completed": false,
      "description": "Book an appointment with the dentist."
    },
    {
      "title": "Gym workout",
      "dueDate": new Date("2023-09-26"),
      "completed": false,
      "description": "Hit the gym for a workout session."
    },
    {
      "title": "Read a book",
      "dueDate": new Date("2023-09-24"),
      "completed": false,
      "description": "Spend some time reading a new book."
    },
    {
      "title": "Pay bills",
      "dueDate": new Date("2023-09-30"),
      "completed": false,
      "description": "Settle monthly utility bills."
    },
    {
      "title": "Plan weekend trip",
      "dueDate": new Date("2023-09-29"),
      "completed": false,
      "description": "Plan a fun weekend getaway."
    }
  ])

  // show modal if editTask isn't null

  return (
    <main>
      {/* Show modal if editTask isn't null */}
      <EditModal editTask={editTask} onClose={() => {setEditTask(null)}} />

      {/* Header */}
      <Header />
      
      {/* Toolbar */}
      <section className='toolbar'>
        <Toolbar />
      </section>

      {/* List */}
      <ul className='list'>
        <TaskList tasks={tasks} onTaskEdit={toEditTask => setEditTask(toEditTask)} onTasksChange={newTasks => setTasks([...newTasks])}/>
      </ul>
    </main>
  );
}

export default App;
