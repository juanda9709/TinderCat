import React from 'react'
import Logo from '../../../../static/logo-color.svg'
import { TopbarIcon } from './Topbar-icon'

const logoStyle = {
    flex: 1,
    textAlign: 'center'
}

export const Topbar = () => (
    <div className="topbar">
        <div>
            <TopbarIcon name="menu-outline" />
        </div>
        <div style={ logoStyle }>
            <img width="200" src={ Logo } />
        </div>
        <div>
            <TopbarIcon badge="6" name="notifications-outline" />
        </div>
    </div>
)