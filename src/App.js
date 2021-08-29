import './App.css';
import Menu from './component/Menu/Menu';
import { data } from './data/data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu recipes={data} />
      </header>
    </div>
  );
}

export default App;
