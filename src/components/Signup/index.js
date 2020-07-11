import React, {useState} from 'react'
import Logo from '../../static/zona-gato.png'
import Titulo from '../../static/titulo.jpg'

import swal from 'sweetalert'
import {useHistory}  from 'react-router-dom'
import { requestHttp } from '../../config/http-server'
import { HTTP_CONSTANTS } from '../../config/http-constants'

export const Signup = (props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [nickname, setNickname] = useState('')                         
    const [password, setPassword] = useState('')
    const [gender, setGender] = useState('')
    const [birthday, setBirthday] = useState('')
    const [bio, setBio] = useState('')
    const [photo, setPhoto] = useState('')
    const history = useHistory()

    const onSubmitHandler = (e) => {
       
        e.preventDefault()
        const data = signupCatData()
        signupRequest(data)                
    }   

    const signupCatData = () => {
     const data = {
        name,
        bio,
        email,
        nick: nickname,
        gender,
        password,
        birthday,
        image: photo,
        preferences: {
            gender: gender === 'F' ? 'M': 'F',
            age_min:1,
            age_max:10
        }
    }
    return data
    }

    const redirectLogin = () => {
        history.push('/login')
    }

    const signupRequest = async (data) => {
        try {
            const endpoint = HTTP_CONSTANTS.register
            const response = await requestHttp('post', endpoint, data)
            
            
            if (response.status === 1) {
                swal('Great!', 'Yoy are now in TinderCat', 'success')
                .then(value => {
                    redirectLogin()
                })
            } else {
                swal('Error!', 'Try later please', 'warning')
            }
        } catch (err) {
            swal('Error!', 'Try pipi please', 'warning')
        }
    }
  

return(
    <div className= "Signap">
            <div className="Signupi">
         <form onSubmit={ onSubmitHandler }>
            <img src={Logo} /> <br/>
            <img src={Titulo} />
            
            <div className="input-custom">
                <label>Name: </label>
                <input type="text" value={name} onChange={(n) => setName(n.target.value)} required= { true }/>
            </div>
            <div className="input-custom">
                <label>Email address:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required= { true } />
            </div>
            <div className="input-custom">
                <label>Nickname: </label>
                <input type="text" value={nickname} onChange={(n) => setNickname(n.target.value)} required= { true } />
            </div>
                        
            <div className="input-custom">
                <label>Password:</label>
                <input type="password" value={password} onChange={(p) => setPassword(p.target.value)} required= { true } />
            </div>

            <div className="input-custom">     
                <label>Birthday:</label>
                <input type="date" value={birthday} onChange={(bd) => setBirthday(bd.target.value)} required= { true } />
            </div>

            <div className="input-custom">     
                <label>Photo:</label>
                <input type='url' value={photo} onChange={(p) => setPhoto(p.target.value)} required= { true } />
            </div>

            <div className="input-custom">     
                <label>Bio:</label>
                <textarea value={bio} onChange={(b) => setBio(b.target.value)} required= { true } />
            </div>

            <div className="Radioboton">
                <label>Male: </label>
                <input type="radio" value="M" name="gender" onChange={(g) => setGender(g.target.value)}/>
                <label>Female: </label>
                <input type="radio" value="F" name="gender" onChange={(g) => setGender(g.target.value)}/>
            </div>
            

            <br />
            
                <div className="button-primary">
                    <input type="submit" value="Register" />
                </div>
      
            <br />
           
            </form>

    </div>
    </div>

)
}
