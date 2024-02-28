import { Outlet, Link } from "react-router-dom"; 

const Layout = () =>{
    return <div>
        <nav>
            <ul class = "cosas">
              
                    <Link to="/" >Home</Link>
              
                    <Link to="/equipos">Equipos</Link>
               
                    <Link to="/jugadores">Jugadores</Link>
         
                    <Link to="/posiciones">Tabla de posiciones</Link>
            </ul>
        </nav>
        <hr />
        <Outlet />
    </div>
}
export default Layout; 