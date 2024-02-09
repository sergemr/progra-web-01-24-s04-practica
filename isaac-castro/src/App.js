import logo from './logo.svg';
import './App.css';

function App() {
  function Registrar(){
    alert ("Registrado")
  };
  return (
    <div className="App">
      <h1>Registration</h1>
      <input type="Username"></input>
      <input type="Password"></input>
      <br></br>
      <button onClick={Registrar}>Registrar</button>


    </div>
    

  );
}

export default App;
