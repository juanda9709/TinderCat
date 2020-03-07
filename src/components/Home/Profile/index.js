import React from 'react'
import { Avatar } from './ProfileDetail/Avatar'
import { Bio } from './ProfileDetail/Bio'
import { Menu } from './ProfileDetail/Menu'

export const Profile = () => (
    <div className="profile">
        <Avatar />
        <Bio />
        <Menu />
    </div>
)