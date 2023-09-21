import { useContext, useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([])

  return (
    <main>
      {/* Header */}
      <header className='header'>

      </header>

      {/* Toolbar */}
      <section className='toolbar'>
        
      </section>

      {/* List */}
      <ul className='list'>
      </ul>
    </main>
  );
}

export default App;
