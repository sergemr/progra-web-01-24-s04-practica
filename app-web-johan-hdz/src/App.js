import logo from './logo.svg';
import './App.css';
function acceder(){
  alert("Acceso correcto... bienvenido!")
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Bienvenido a nuestro sistema de loggin...</h1>
       <p>Ingrese su usuario...</p>
       <input type="text"></input>
       <p>Ingrese su contraseña...</p>
       <input type="password"></input>
       <br></br>
       <button onClick={acceder}>Acceder</button>
      </header>
    </div>
  );
}

export default App;
