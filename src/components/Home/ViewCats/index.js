import React, { useState, useEffect } from 'react'
import { Topbar } from './components/Topbar'
import { Navigation } from './components/Navigation'
import { Reactions } from './components/Reactions'

export const ViewCats = () => {
    
    const [actualCat,setActualCat] = useState({})

    

    const refreshActualCat = (idCat) => {
        setActualCat(idCat)
    }
    
    const notifyChange = () => {
        
        setActualCat({})
        window.location.href = '/'
    }
    
    return(<div className="view-cats">
        <Topbar />
        <Navigation onPress = {refreshActualCat} />
        <Reactions cat = {actualCat} changeCat = {notifyChange} />
    </div>)
}