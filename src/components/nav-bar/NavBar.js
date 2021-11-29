
import React from "react"
import { Link } from "react-router-dom"
import CartWidgets from "./cart-widget/CartWidget"
import DropDown from "./drop-down/DropDown"
import NavAuth from "./nav-auth/NavAuth"

import "./NavBar.css"


const NavBar = () => {


    return (
        <header className="header">
            <nav className="nav">

                <div className="nav-brand">
                    <Link to="/" className="nav-brand-link"> e-Servicios </Link>
                </div>



                <div className="nav-menu">

                    <div className="nav-menu-item" >
                        <DropDown />
                    </div>

                    <div className="nav-menu-item" >
                        <NavAuth />
                    </div>

                    <div className="nav-menu-item" >
                        <CartWidgets />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar