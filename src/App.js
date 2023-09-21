
import './App.css';
import Header from './Header';
import Toolbar from './Toolbar.js';
import { useContext, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([])

  return (
    <main>
      <Header />
      <header />
      {/* Header */}
      <header className='header'></header>
      {/* Toolbar */}
      <section className='toolbar'>
        <Toolbar/>
      </section>

      {/* List */}
      <ul className='list'>
      </ul>
    </main>
  );
}

export default App;
