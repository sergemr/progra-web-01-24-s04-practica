import logo from './logo.svg';
import './App.css';

function App() {
  let nombre = "JOHN";

  return (
    <div className="App">
      <h1>FORMULARIO</h1>
      <label>Nombre:</label>
      <input type="text"></input>
      <br></br>
      <label>Clave:</label>
      <input type="text"></input>
      <br></br>
      <select>
        <option>1</option>
        <option>2</option>
      </select>
      <button>Ingresar</button>
    </div>
  );
}

export default App;
