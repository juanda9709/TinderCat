import React,  { useEffect, useState } from 'react'
import { Profile } from './Profile'
import { ViewCats } from './ViewCats'
import { AboutCat } from './AboutCat'
import { ProfileContextStore } from '../../Contexts/ProfileContext'
import { AboutCatContextStore } from '../../Contexts/AboutCatContext'

export const Home = () => {

        
    return(

    <div className="home-page">
        
        <AboutCatContextStore>
        <ProfileContextStore>        
            <Profile />        
            <ViewCats />            
            <AboutCat />
        </ProfileContextStore>
        </AboutCatContextStore>
       
    </div>
   
   )
    }