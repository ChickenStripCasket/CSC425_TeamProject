
import './App.css';
import Header from './Header';
import TaskCardGrid from './TaskCardGrid';
import Toolbar from './Toolbar.js';
import { useState } from 'react';

function App() {
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

  return (
    <main>
      <Header />
      <header />
      {/* Header */}
      <header className='header'></header>
      {/* Toolbar */}
      <section className='toolbar'>
        <Toolbar />
      </section>

      {/* List */}
      <ul className='list'>
        <TaskCardGrid tasks={tasks} onTasksChange={newTasks => setTasks([...newTasks])}/>
      </ul>
    </main>
  );
}

export default App;
