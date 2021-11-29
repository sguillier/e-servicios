import { useState } from "react"
import SignUp from "../../components/auth/SignUp"
import SignIn from "../../components/auth/SignIn"
import { useLocation } from "react-router"


const AuthContainer = () => {
    const [ sign, setSign ] =  useState('In')
    const location = useLocation()
    const nextRoute = location.state.nextRoute

    // console.log('location: ', nextRoute)

    return (
        <div>
            {(sign==='In')?
                <SignIn setSign={setSign} nextRoute={nextRoute} />:
                <SignUp setSign={setSign} nextRoute={nextRoute} />
            }
        </div>
    )
}

export default AuthContainer
