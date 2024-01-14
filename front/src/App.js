import logo from './logo.svg';
import './App.css';
import './components/Nav/Nav'
import BasicExample from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <BasicExample />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
