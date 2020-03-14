import React from 'react'

export const TopbarIcon = ({ name, badge }) => (
    <div className="topbar-icon">
        <ion-icon name={ name }></ion-icon>
        {/*badge ? <span>{ badge }</span> : null */}
        { badge && <span>{ badge }</span> }
    </div>
)