import React from 'react';
import './App.css';
import Header from './Header';
import Toolbar from './Toolbar.js';

function App() {
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
