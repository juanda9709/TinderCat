import React from 'react'
import Logo from '../../static/logo-login.png'

export const Login = () => (
    <div className="login">
        <form>
            <img src={Logo} />
            <div className="input-custom">
                <label>Email address</label>
                <input type="email" />
            </div>
            <div className="input-custom">
                <label>Password</label>
                <input type="password" />
            </div>
            <br />
            <div className="button-primary">
                <input type="button" value="Login" />
            </div>
            <br />
            <p className="signup-link">
                ¿Not member yet? <a href="#">Signup</a>
            </p>
        </form>
    </div>
)