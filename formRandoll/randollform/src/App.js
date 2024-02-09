import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <h1>FORMULARIO </h1>
      <br></br>
      <form>
        <label for="fuser">User:</label>
        <input type="text"></input>
        <br></br>
        <label for="fpass">password:</label>
        <input type="password"></input>
        <br></br>
        <input type="submit"></input>
      </form>
      </header>
    </div>
  );
}

export default App;
