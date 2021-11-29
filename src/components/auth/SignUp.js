import { fireSignUp } from "../../firebase/firebase"


import './Auth.css'
import { useState } from "react/cjs/react.development";
import { useNavigate } from "react-router-dom";


const SignUp = ({ setSign, nextRoute }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const navigate = useNavigate()


    const runSignUp = async (e) => {
        e.preventDefault()

        if (!name.trim()) {
            console.log('esta vacio nombre')
            return
        }

        if (!email.trim()) {
            console.log('esta vacio email')
            return
        }

        if (!password.trim()) {
            console.log('esta vacio password')
            return
        }

        if (await fireSignUp(name, email, password)) {
            console.log('registrando: ', email, password)
            navigate(nextRoute)
            return
        } else {
            console.log('Error')
        }
        
    }


    return (
        <div className="auth-card">
            <div className="auth-card-padding">
                <h2 className="auth-card-title">Registro</h2>
                <hr />
                <form className="auth-form" onSubmit={runSignUp}>
                    Nombre
                    <input
                        type="text"
                        className="auth-form-input"
                        onChange={e => setName(e.target.value)}
                    />
                    <br />
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
                        Registrar
                    </button>
                </form>



                <br />
                <p>
                    Si ya tienes una cuenta, ingresa {' '}
                    <span
                        onClick={() => setSign('In')}
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

export default SignUp
