import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"

function App() {

  const[name,setName] = useState(" ");
  const[nameConfirm,setNameConfirm] = useState("  ");
  const[isValid,setIsValid] = useState=false;

  let nombre = "Juan";

  const saludar = () => {
    alert ("hola");
  }

  function despedir() {
    alert (`adios ${name}`);
  }
  
  useEffect (() => {
    console.log("Se monto el componente");
    setName("Juan");
    if (name ==nameConfirm){
      setIsValid=true;
    }
  }, [nameConfirm]);
  
  return (
    <div className="App">
      <h1>Sistema de login basico</h1>
      <h1>Hola mundo {nombre}</h1>
      <h1>hola {name}</h1>
      
    <input
      onChange={(event) => {
        console.log(event.target.value);
        setName(event.target.value);
}} type="text"></input>
{/* */}
<br></br>
<br></br>

<input
      onChange={(event) => {
        console.log(event.target.value);
        setName(event.target.value);
}} type="text"></input>
{/* */}
<br></br>
<br></br>

<button onClick={saludar}>Saludar</button>
{
<button onClick={despedir}>Despedir</button>  
}
{/*      <label>Nombre </label>
      <input type="text"/>
      <br></br>
      <label>Contrasenia </label>
      <input type="password"/>
      <br></br>
      <button>Ingresar</button>
*/}
    </div>
  );
}

export default App;
