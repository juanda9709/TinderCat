import React, {createContext} from 'react'

export const AboutCatContext = createContext(null)

{/*}
export const AboutCatContextStore = () => {

    const [ aboutcatPanel, setaboutcatPanel] = useState(false)
    
    useEffect( () =>{
        const showState = window.innerWidth > 768
        setaboutcatPanel (showState)
    }, [] )

    return (
        <AboutCatContext.Provider value ={ {aboutcatPanel, setaboutcatPanel}}>
            
        </AboutCatContext.Provider>
    )
} */}
