import { fireSignIn } from "../../firebase/firebase"


import './Auth.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SignIn = ({ setSign, nextRoute }) => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()


    const runSignIn = (e) => {
        e.preventDefault()

        if (!email.trim()) {
            console.log('Esta vacio email')
            return
        }

        if (!password.trim()) {
            console.log('Esta vacio password')
            return
        }

        if ( fireSignIn(email, password)) {
            navigate(nextRoute)
        } else {
            console.log('Error')
            return
        }

    }


    return (
        <div className="auth-card">
            <div className="auth-card-padding">
                <h2 className="auth-card-title">Iniciar Sesion</h2>
                <hr />
                <form className="auth-form" onSubmit={runSignIn}>
                    Correo
                    <input
                        type="email"
                        className="auth-form-input"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <br />
                    Contraseña
                    <input
                        type="password"
                        className="auth-form-input"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <br />
                    <br />
                    <button
                        type="submit"
                        className="auth-card-button-primary"
                    >
                        Entrar
                    </button>
                </form>

                <br />
                <p>
                    Si no tienes cuenta, te puedes registrar {' '}
                    <span
                        onClick={() => setSign('Up')}
                        className="span-link"
                    >
                        aquí
                    </span>
                </p>
                <br />

            </div>
        </div>
    )
}

export default SignIn
