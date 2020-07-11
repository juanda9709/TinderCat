import React from 'react'

export const ReactionIcon = ({ name, color = '#ccc', interactionClick }) => (
    <div className="reaction-icon" style={{ backgroundColor: color }} >
        <ion-icon name={ name } onClick={interactionClick} ></ion-icon>
    </div>
)