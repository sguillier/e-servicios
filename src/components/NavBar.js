
import React from "react"

const NavBar = () => {
    return (
        <header className="header">
            <nav className="nav">
                <div id="nav-marca">e-Servicios</div>

                <div className="nav-menu">
                    <div id="nav-registro" className="nav-menu-item oculta-nav-item">
                        Registro
                    </div>
                    <div id="nav-inicio" className="nav-menu-item oculta-nav-item">
                        Inicio Sesion
                    </div>
                    <div id="nav-home" className="nav-menu-item oculta-nav-item">
                        Home
                    </div>
                    <div id="nav-salida" className="nav-menu-item oculta-nav-item">
                        Salir
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar