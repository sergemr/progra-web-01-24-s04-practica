import logo from './logo.svg';
import './App.css';

function App() {
  function enviar (){
    alert("Se ha enviado correctamente");
  }
  return (
    <div className="App">
      <h1>Bienvenido</h1>

      <h2>User</h2>
      <input type="text" id></input>
      <h2>Password</h2>
      <input type="text"></input>
      <button onClick={enviar}>Enviar</button>
    </div>
  );
}

export default App;
