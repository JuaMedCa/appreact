import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from "./componentes/Layout";
import About from "./componentes/About";
import Equipos from "./componentes/Equipos";
import Error from "./componentes/Error";
import Jugadores from "./componentes/Jugadores";
import Posiciones from './componentes/posiciones';
import Home from "./componentes/Home";

function App() {
  return (
    <div>
      <Routes>
<        Route path='/' element={<Layout />}>
        <Route path='about' element={<About />} />
        <Route path='/' element={<Home />} />
        <Route path='equipos' element={<Equipos />} />
        <Route path='*' element={<Error />} />
        <Route path='jugadores' element={<Jugadores />} />
        <Route path='posiciones' element={<Posiciones />} />
        </ Route>

      </Routes>
    </div>
  );
}

export default App;
