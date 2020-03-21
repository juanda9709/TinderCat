import React from 'react'
import { Profile } from './Profile'
import { ViewCats } from './ViewCats'
import { AboutCat } from './AboutCat'

export const Home = () => (
    <div className="home-page">
        <Profile />
        <ViewCats />
        <AboutCat />
    </div>
)