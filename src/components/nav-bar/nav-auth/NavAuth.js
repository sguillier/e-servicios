import { onAuthStateChanged } from "@firebase/auth"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { auth, fireSignOut } from "../../../firebase/firebase"

import './NavAuth.css'


const NavAuth = () => {
    const navigate = useNavigate()
    const [name, setName] = useState(null)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // console.log("Sing: In")
                setName(user.displayName)
            } else {
                setName(null)
                // console.log("Sing: Out")
            }
        });
    }, [])

    const runSingOut = async () => {
        if (fireSignOut()) {
            navigate('/')
        }
    }

    return (
        <div className="nav-auth-container">

            {name ?
                <div
                    className="nav-auth-logout"
                >
                    Hola {name} {' '}
                    <span
                        className="nav-auth-exit"
                        onClick={runSingOut}
                    >
                        salir
                    </span>
                </div>
                :
                <div
                    className="nav-auth-login"
                    onClick={() => navigate('/auth', { state: { nextRoute: '/' } })}
                >
                    Ingresar
                </div>
            }
        </div>
    )
}

export default NavAuth
