
import React from "react"
import { Link } from "react-router-dom"
import CartWidgets from "./CartWidgets"
import Dropdown from "./dropdown/Dropdown"
import "./NavBar.css"


const NavBar = () => {
    return (
        <header className="header">
            <nav className="nav">

                <div className="nav-brand">
                    <Link to="/" className="nav-brand-link"> e-Servicios </Link>
                </div>


                <div className="nav-menu">

                    <div className="nav-categorys">
                        <Dropdown />
                    </div>

                    <div id="nav-registro" className="nav-menu-item">
                        Registro
                    </div>
                    <div id="nav-inicio" className="nav-menu-item">
                        Inicio Sesion
                    </div>
                    {/* <div id="nav-salida" className="nav-menu-item">
                        Salir
                    </div> */}
                    <div id="nav-cart" className="nav-menu-item" >
                        <CartWidgets />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar