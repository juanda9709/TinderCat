import React from 'react'
import { Profile } from './components/Home/Profile'
import { ViewCats } from './components/Home/ViewCats'
import { AboutCat } from './components/Home/AboutCat'
import { Home } from './components/Home'

export const App = () => (
  <Home>
    <Profile />
    <ViewCats />
    <AboutCat />
  </Home>
)