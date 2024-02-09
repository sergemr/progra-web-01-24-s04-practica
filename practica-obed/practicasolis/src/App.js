import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
        <h1>Formulario de Practica</h1>
        <form>
         <label>
           Usuario:
      <    input type="text" name="name" />
         </label>
         <label>
          <br></br>
           Clave:
      <    input type="text" name="name" />
         </label>
         <br></br>
         <input type="submit" value="Submit" />
         </form>
    </div>
  );
}

export default App;
