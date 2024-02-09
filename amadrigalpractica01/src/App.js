import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Sistema de login basico</h1>

      <label>Nombre </label>
      <input type="text"/>
      <br></br>
      <label>Contrasenia </label>
      <input type="password"/>
      <br></br>
      <button>Ingresar</button>
    </div>
  );
}

export default App;
