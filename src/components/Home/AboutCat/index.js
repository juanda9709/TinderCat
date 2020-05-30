import React, { useContext } from 'react'
import { Interests } from './Components/Interests'
import { Preferences } from './Components/Preferences'
import { AboutCatContext } from '../../../Contexts/AboutCatContext'
import { PreferencesAge } from './Components/PreferencesAge'

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
    <Preferences/>
    <PreferencesAge/>
    <Interests/>
    </div>
)
}