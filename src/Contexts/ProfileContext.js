import React, { createContext, useEffect, useState } from 'react'

export const ProfileContext = createContext(null)

export const ProfileContextStore = ({children}) => {

    const [ profilePanel, setProfilePanel] = useState(false)
    
    useEffect( () =>{

        const handlerResize = () => {
        const showState = window.innerWidth > 768
        setProfilePanel (showState)
    }
        
        window.addEventListener('resize', handlerResize)
        handlerResize()
        return () => window.removeEventListener('resize', handlerResize)
    }, [] )

    return (
        <ProfileContext.Provider value ={ {profilePanel, setProfilePanel}}>
            {children}
        </ProfileContext.Provider>
    )

}