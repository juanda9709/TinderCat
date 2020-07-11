import React, {useState} from 'react'
import Logo from '../../static/logo-login.png'
import swal from 'sweetalert'
import {
    useHistory, Link
} from 'react-router-dom'
import { HTTP_CONSTANTS } from './../../config/http-constants'
import { requestHttp } from './../../config/http-server'

export const Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const LoginCatData = () => {
        const data = {
           email,
           password
        }
        return data 
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        const data = LoginCatData()
        LoginRequest(data) 
    }
    const LoginRequest = async (data) => {
        try {

            const endpoint = HTTP_CONSTANTS.login
            const response = await requestHttp('get', endpoint, {}, data)
           // const response = await axios.get('http://localhost:5001/cats/login' , {params: data})    
                  
            if (response.status === 1) {
                    sessionStorage.setItem('_TOKEN_', response.token)
                    redirectHome()
                }
            else {
                swal('Error!', 'Wrong Email/Password', 'warning')
            } 
        }
            catch (err) {
            swal('Error!', 'Wrong', 'warning')
        }
    }
       
    const redirectHome = () => {
        history.push('/')
    }

    return (
    <div className="login">
        <form onSubmit={ onSubmitHandler }>
            <img src={Logo} />
            <div className="input-custom">
                <label>Email address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required= { true }/>
            </div>
            <div className="input-custom">
                <label>Password</label>
                <input type="password" value={password} onChange={(p) => setPassword(p.target.value)} required= { true }/>
            </div>
            <br />
          
                <div className="button-primary">
                    <input type="submit" value="Login" />
                </div>
            
            <br />
            <p className="signup-link">
                ¿Not member yet?
                    <Link to="/signup">
                        Signup
                    </Link>
            </p>
        </form>
    </div>
)

}