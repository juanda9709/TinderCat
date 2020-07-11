import React, { useContext } from 'react'
import Logo from '../../../../static/logo-color.png'
import { TopbarIcon } from './Topbar-icon'
import { ProfileContext } from '../../../../Contexts/ProfileContext'
import { AboutCatContext } from '../../../../Contexts/AboutCatContext'

const logoStyle = {
    flex: 1,
    textAlign: 'center'
}

export const Topbar = () => {

    const { profilePanel, setProfilePanel} = useContext(ProfileContext)
    const { aboutcatPanel, setaboutcatPanel} = useContext(AboutCatContext)
 
    const profilePanelHandler = () => {
        setProfilePanel(!profilePanel)
    }

    const aboutcatPanelHandler = () => {
        setaboutcatPanel(!aboutcatPanel)
    }
    return(
    <div className="topbar">

        <div className ="show-mobile">
        <TopbarIcon onPress={profilePanelHandler} name="menu-sharp" />
        </div>
        <div style={ logoStyle }>
            <img width="200" src={ Logo } />
        </div>
        <div className ="show-mobile">
        <TopbarIcon onPress={aboutcatPanelHandler} name="apps" />
        </div>
        <TopbarIcon badge="6" name="notifications" />

    </div>
)
}