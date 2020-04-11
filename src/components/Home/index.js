import React,  { useEffect, useState } from 'react'
import { Profile } from './Profile'
import { ViewCats } from './ViewCats'
import { AboutCat } from './AboutCat'
import { ProfileContextStore } from '../../Contexts/ProfileContext'
import { AboutCatContext } from '../../Contexts/AboutCatContext'

export const Home = () => {

    const [ aboutcatPanel, setaboutcatPanel] = useState(false)
    
    useEffect( () =>{
        const showState = window.innerWidth > 768
        setaboutcatPanel (showState)
    }, [] )

    
    return(

    <div className="home-page">
        
        <ProfileContextStore>
        <AboutCatContext.Provider value ={ {aboutcatPanel, setaboutcatPanel}}>
                    <Profile />        
                    <ViewCats />            
                    <AboutCat />
        </AboutCatContext.Provider>
        </ProfileContextStore>
       
    </div>
   
   )
    }