import "./App.css";
import About from "./component/About/About";
import Inicio from "./component/Inicio/Inicio";
import Nav from "./component/Nav/Nav";
import Proyectos from "./component/Proyectos/Proyectos";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Inicio />
      <About />
      <Proyectos />
    </div>
  );
}