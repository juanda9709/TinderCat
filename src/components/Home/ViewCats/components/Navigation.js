import React, {useState, useEffect} from 'react'
import { NavigationIcon } from './Navigation-icon'
import { Couple } from './Couple'
import {CAT_LIST} from '../../../../data/db'

export const Navigation = () => {
    
    const [indexCat, setIndexCat] =useState(0)
    const [cat, setCat] = useState({}) //useState para inicializar la variable cat -- useCat para modificar variable cat
    
    const goBack = () => {
        console.log('go back...')
        
        let newIndex= indexCat == 0 ? CAT_LIST.length -1 : indexCat -1 
   
        setIndexCat ( newIndex )
       // setCat(CAT_LIST[newIndex]) 
    }

    const goNext = () => {
        console.log('go next...')
        let newIndex= indexCat == (CAT_LIST.length -1) ? 0 : indexCat +1 
        setIndexCat ( newIndex)
        //setCat(CAT_LIST[newIndex])
    }

    useEffect( () => {
        setCat(CAT_LIST[indexCat])

    }, [indexCat])
    
    return (
        <div className="navigation">
        <NavigationIcon onPress={goBack} name="arrow-undo" />
        <Couple
            image={cat.image}
            username={cat.username}
            description={cat.description}
        />
        <NavigationIcon onPress={goNext} name="arrow-redo" />
        
    </div>
    )
}


