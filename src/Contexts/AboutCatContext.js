import React, {createContext, useEffect, useState} from 'react'

export const AboutCatContext = createContext(null)


export const AboutCatContextStore = ({children}) => {

    const [ aboutcatPanel, setaboutcatPanel] = useState(false)

    useEffect( () =>{
    const handlerResize = () => {
            const showState = window.innerWidth > 768
            setaboutcatPanel (showState)
    }

        window.addEventListener('resize', handlerResize)
        handlerResize()
        return () => window.removeEventListener('resize', handlerResize)


    }, [] )

    return (
        <AboutCatContext.Provider value ={ {aboutcatPanel, setaboutcatPanel}}>
            {children}
        </AboutCatContext.Provider>
    )
}
