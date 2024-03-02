import { Outlet, Link } from "react-router-dom"; 
import React from "react";


const Layout = () =>{
    return <div>
        
        <nav>
                    <a>
                        <Link to="/">Inicio</Link>
                    </a>
                    <a>
                        <Link to="/equipos">Equipos</Link>
                    </a>
                    <a>
                        <Link to="/jugadores">Jugadores</Link>
                    </a>
                    <a>
                        <Link to="/posiciones">Posiciones</Link>
                    </a>
                    <div className="animation start-home"></div>
            
        </nav>
        <Outlet />
    </div>
    
}
export default Layout; 