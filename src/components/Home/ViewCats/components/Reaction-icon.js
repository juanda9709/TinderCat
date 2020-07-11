import React from 'react'

export const ReactionIcon = ({ name, color = '#2f2e33', interactionClick }) => (
    <div className="reaction-icon" style={{ backgroundColor: color }} >
        <ion-icon name={ name } onClick={interactionClick} ></ion-icon>
    </div>
)