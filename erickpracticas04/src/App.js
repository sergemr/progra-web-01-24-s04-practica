import './App.css';

function App() {
const nombre = "Erick Daniel Villalobos M"

  return (
    <div className="App">
      <h1>Hola soy "{nombre}", este es mi form</h1>
      <form action="submit">
        <label htmlFor="name">Nombre: </label>
        <input type="text" />
        <br />
        <label htmlFor="genero" >Genero:&nbsp;&nbsp;&nbsp;&nbsp; </label>
        <label htmlFor="name"> Masculino: </label>
        <input type="radio" id="html" name="gen" value="masc" />
        <label htmlFor="femenino"> Femenino: </label>
        <input type="radio" id="css" name="gen" value="fem" />
        <label htmlFor="otro">Otro: </label>
        <input type="radio" id="javascript" name="gen" value="otro"/>
        <br />
         <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
