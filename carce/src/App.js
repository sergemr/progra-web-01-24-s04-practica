import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a>
          Formulario
        </a>
        <h2>
      <label for="mail">Correo electrónico:</label>
      <input type="email" id="mail" name="user_email" />
    </h2>
        <h2>
      <label for="name">contraseña:</label>
      <input type="text" id="name" name="user_name" />
    </h2>
    <br></br>
    <button onClick="Entregar()">Entregar</button>

      </header>
    </div>
  );
}

export default App;
