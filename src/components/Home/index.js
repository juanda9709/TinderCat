import React,  { useEffect, useState, Fragment } from 'react'
import { Profile } from './Profile'
import { ViewCats } from './ViewCats'
import { AboutCat } from './AboutCat'
import { ProfileContextStore } from '../../Contexts/ProfileContext'
import { AboutCatContextStore } from '../../Contexts/AboutCatContext'
import {HTTP_CONSTANTS} from '../../config/http-constants'
import {requestHttp} from '../../config/http-server'


export const Home = () => {

    const [cat, setCat] = useState({})
    const [actualizado, setActualizado] = useState(true)

    const autoLogin = async () => {
        try {
            
            const endpoint = HTTP_CONSTANTS.autologin
            const response = await requestHttp('post', endpoint)
            const { status, cat } = response
            
   
            if(status === 1) {
                setCat(cat)
            } else {
                unauthorized()
            }
        } catch(err) {
            
           unauthorized()
            
        }
    }

    const unauthorized = () => {
        sessionStorage.removeItem('_TOKEN_')
        window.location.href = '/login'
    }
        
    useEffect(() => {
        autoLogin()
        
        return () => {}        
    }, [])

    const actualizar = () => {
        setActualizado({})
        window.location.href = '/'
    }

    useEffect(() => {
            
    }, [actualizado])

    return(
        <div className="home-page">
            
            <AboutCatContextStore>
            <ProfileContextStore>
                {
                    !Object.keys(cat).length ? <p> Loading app... </p> : 
                <Fragment>
                <Profile bio= {cat.bio} nick={cat.nick} image={cat.image}/>        
                <ViewCats />            
                <AboutCat interest= {cat.interests} preferences={cat.preferences} noty = {actualizar} />
                </Fragment>
                }
            </ProfileContextStore>
            </AboutCatContextStore>

        </div>
   
   )
    }