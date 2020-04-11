import React, { useContext } from 'react'
import { Interests } from './Components/Interests'
import { AboutCatContext } from '../../../Contexts/AboutCatContext'

const showaboutcatPanel = {
    display: 'block'
    }


const hideaboutcatPanel = {
    display: 'none'

}


export const AboutCat = () => {

    const {aboutcatPanel , setaboutcatPanel} = useContext(AboutCatContext)

    return (
    <div style={aboutcatPanel ? showaboutcatPanel : hideaboutcatPanel} className="about-cat">
        
    <Interests/>
    </div>
)
}