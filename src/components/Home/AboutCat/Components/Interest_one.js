import React, {useState, useEffect} from "react"
import { HTTP_CONSTANTS } from './../../../../config/http-constants'
import { requestHttp } from './../../../../config/http-server'

const fillStyle ={   
        background: '#4dff4d',
        border:  '#05635d',
        color: '#fff' 
}

export const InterestOne =({name = '...' , status = false, id, notify}) =>{  
    
      
    const onClick = () => {
        notify(id, status)
    }
    
    return ( 
        
    <div onClick = {onClick} style={status ? fillStyle: null} className = "Interest-one">
        {name}
    </div>
       
    )
        
}