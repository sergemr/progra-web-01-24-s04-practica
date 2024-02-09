import logo from './logo.svg';
import './App.css';

function App() {
 
  function registrar () {
    alert ("registrar");
  }
  
  
  return (
    
    <div className="App">
   
    <h1>Registrar</h1>
     <input type="nombre"></input>
       
     <input type="pasword"></input>
     <br></br>
 
      <br></br>
      <button onClick={registrar}>registrar</button>
    </div>
  );
}

export default App;
