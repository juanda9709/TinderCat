import React from 'react'
import Logo from '../../static/zona-gato.png'
import Titulo from '../../static/titulo.jpg'
import {
    Link
} from 'react-router-dom'


export const Signup = () => (
    <div className= "Signap">
            <div className="Signupi">
         <form>
            <img src={Logo} /> <br/>
            <img src={Titulo} />
            
            <div className="input-custom">
                <label>Name: </label>
                <input type="text" />
            </div>
            <div className="input-custom">
                <label>Email address</label>
                <input type="email" />
            </div>
            <div className="input-custom">
                <label>Nickname: </label>
                <input type="text" />
            </div>
                        
            <div className="input-custom">
                <label>Password</label>
                <input type="password" />
            </div>
            <div className="Radioboton">
                <label>Male: </label>
                <input type="radio" value="Gato" name="gender"/>
                <label>Female: </label>
                <input type="radio" value="Gata" name="gender"/>
            </div>
            

            <br />
            <Link to="/">
                <div className="button-primary">
                    <input type="button" value="Register" />
                </div>
            </Link>
            <br />
           
            </form>

    </div>
    </div>

)