import React, {useState} from 'react'
import Logo from '../../static/zona-gato.png'
import Titulo from '../../static/titulo.jpg'
import {
    Link
} from 'react-router-dom'


export const Signup = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [nickname, setNickname] = useState('')
    const [password, setPassword] = useState('')
    const [gender, setGender] = useState('')

    const signUpHandler = () => {
        console.log ('email' , email)
        console.log ('password' , password)
        console.log ('name' , name)
        console.log ('nickName' , nickname)
        console.log ('gender' , gender)
        
    }   
  

return(
    <div className= "Signap">
            <div className="Signupi">
         <form>
            <img src={Logo} /> <br/>
            <img src={Titulo} />
            
            <div className="input-custom">
                <label>Name: </label>
                <input type="text" value={name} onChange={(n) => setName(n.target.value)}/>
            </div>
            <div className="input-custom">
                <label>Email address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-custom">
                <label>Nickname: </label>
                <input type="text" value={nickname} onChange={(n) => setNickname(n.target.value)} />
            </div>
                        
            <div className="input-custom">
                <label>Password</label>
                <input type="password" value={password} onChange={(p) => setPassword(p.target.value)}/>
            </div>
            <div className="Radioboton">
                <label>Male: </label>
                <input type="radio" value="Gato" name="gender" onChange={(g) => setGender(g.target.value)}/>
                <label>Female: </label>
                <input type="radio" value="Gata" name="gender" onChange={(g) => setGender(g.target.value)}/>
            </div>
            

            <br />
            <Link to="/">
                <div className="button-primary">
                    <input onClick = {signUpHandler} type="button" value="Register" />
                </div>
            </Link>
            <br />
           
            </form>

    </div>
    </div>

)
}
