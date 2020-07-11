import React, { useState, useContext, useEffect } from 'react'
import { Interests } from './Components/Interests'
import { Preferences } from './Components/Preferences'
import { AboutCatContext } from '../../../Contexts/AboutCatContext'
import { PreferencesAge } from './Components/PreferencesAge'
import { HTTP_CONSTANTS } from './../../../config/http-constants'
import { requestHttp } from './../../../config/http-server'
import {Loved} from './Components/Loved'

const showaboutcatPanel = {
    display: 'block'
    }

const hideaboutcatPanel = {
    display: 'none'
}

export const AboutCat = ({ interest, preferences, noty }) => {

    const [preferencesUpdated, setPreferencesUpdated]= useState(preferences)
    //const [interestUpdated, setInterestUpdated]= useState(interest)


    const prefChangedHandler = (genderSelected) => {
        
        
        setPreferencesUpdated(prevState => ({
            ...prevState,
            gender: genderSelected
        }))

    }

    const prefAgesChangedHandler = (min,max) => {
    
        setPreferencesUpdated(prevState => ({
            ...prevState,
            age_min: min,
            age_max: max
        }))

        
    }
    useEffect(()=>{
        
        if(JSON.stringify(Preferences) !== JSON.stringify(preferencesUpdated)) {
            requestChangePreferences()
           
        } 
              

    }, [preferencesUpdated])


    const requestChangePreferences = async () => {
        try {
            const endpoint = HTTP_CONSTANTS.updatePreferences
            const bodyData = {
                preferences: preferencesUpdated
            }
            const response = await requestHttp('put', endpoint, bodyData)
            
        } catch (err) {
            console.error('Error: ', err)
        }
        
    }

    const notificar =() =>{
        noty()
    }

    const {aboutcatPanel , setaboutcatPanel} = useContext(AboutCatContext)

    return (
    <div style={aboutcatPanel ? showaboutcatPanel : hideaboutcatPanel} className="about-cat">
    <Preferences onChange={prefChangedHandler} gender={preferences.gender}/>
    <PreferencesAge onChange= {prefAgesChangedHandler} age_min={preferences.age_min} age_max={preferences.age_max} />
    <Interests interestCat={interest} Notificador = {notificar}/>
    <Loved/>
    </div>
)
}