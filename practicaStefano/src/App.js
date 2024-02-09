import logo from './logo.svg';
import './App.css';

function App() {
  let Aceptar="completo"
  return (
    <div className="App">
      <h1>Welcome</h1>
      <p>Name:</p>
      <input type="text"></input>
      <p>Password:</p>
      <input tyoe="password"></input>
      <br></br>
      <button onClick={Aceptar}>Aceptar</button>
    </div>
  );
}

export default App;
