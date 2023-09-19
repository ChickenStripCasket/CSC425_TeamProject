import logo from './logo.svg';
import './App.css';
import { Icon } from './material/Icon';

function App() {
  return (
    <main>
      {/* Header */}
      <header className='header'></header>
      {/* Toolbar */}
      <section className='toolbar'></section>
      {/* List */}
      <ul className='list'>
        <Icon icon='search'></Icon>
      </ul>
    </main>
  );
}

export default App;
