import React, {useState, useEffect, Fragment} from 'react'
import { NavigationIcon } from './Navigation-icon'
import { Couple } from './Couple'
//import {GetAvaibleCats} from '../../../../data/db'
import {HTTP_CONSTANTS} from '../../../../config/http-constants'
import {requestHttp} from '../../../../config/http-server'

export const Navigation = ({onPress}) => {
    
    const [catsList, setCatsList] = useState([])
    const [indexCat, setIndexCat] = useState(-1)
    const [cat, setCat] = useState({}) //useState para inicializar la variable cat -- useCat para modificar variable cat
    const [flag, setFlag] = useState(false)

     const GetAvaibleCats = async () => {
        try {        
            const endpoint = HTTP_CONSTANTS.catlist
            const response = await requestHttp('get', endpoint)
            const { status, avaibleCats } = response
            console.log('respose:',response)
            console.log(avaibleCats)
            setCatsList(avaibleCats)    
            setIndexCat(0)     
                      
        } catch(err) {
            
          console.error(err)
        }
        
    }
    
      const goBack = () => {        
        if (catsList.length > 0){
        let newIndex= indexCat == 0 ? catsList.length -1 : indexCat -1 
              
        setIndexCat ( newIndex )
        }

       // setCat(CAT_LIST[newIndex]) 
    }

    const goNext = () => {

        if (catsList.length > 0){
        let newIndex= indexCat == (catsList.length -1) ? 0 : indexCat +1 
        setIndexCat ( newIndex)
        //setCat(CAT_LIST[newIndex])
         }
    }

    useEffect(() => {
        GetAvaibleCats()
       
        return () => {}
      }, [])

    useEffect( () => { 
       
        if(catsList && catsList.length > 0)
        {
         setCat(catsList[indexCat])
      
         onPress(catsList[indexCat])
         setFlag(true) 
        }
        return () => {}

    }, [indexCat])
    
    return (
        <div className="navigation">        

                        
        <NavigationIcon onPress={goBack} name="arrow-undo" />
       { !Object.keys(cat).length ? <div className="image-couple">
        
        <h3>NO FUERON ENCONTRADOS LOS GATOS</h3>
        <p>MODIFICAR INTERESES</p>
        </div> :  <Couple
            image={cat.image}
            username={cat.nick}
            description={cat.bio} /> 
        } 
        <NavigationIcon onPress={goNext} name="arrow-redo" />
       
         
    </div>
    )
}


