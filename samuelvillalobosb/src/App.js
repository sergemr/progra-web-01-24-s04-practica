import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      let nombre = "Juan"
      <h1>Formulario</h1>
      <label>Nombre:</label>
      <input type="text"/> 
      <br></br>
      <label>Password:</label>
      <input type="password"/>
      <br></br>
      <h2>Seleccione</h2>
      <select>
        <option>1</option>
        <option>2</option>
      </select>
      <button>Ingresar</button>
    </div>
  );
}

export default App;
