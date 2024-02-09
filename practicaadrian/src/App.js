import './App.css';

function App() {
  function despedir(){
    alert("Adios");
  }

  return (
    <div className="App">
      <h1>Ingrese los datos</h1>

      <p>Usuario</p>
      <input type="text"></input>
      <br></br>

      <p>contraseña</p>
      <input type="contraseña"></input>
      <br></br>

      <p>Edad</p>
      <select>
        <option>-</option>
        <option>menor de edad</option>
        <option>mayor de edad</option>
        <option>adulto mayor</option>
      </select>
      <br></br>

      <button onClick={despedir}>despedir</button>

    </div>
  );
}

export default App;
