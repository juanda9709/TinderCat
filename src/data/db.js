import {HTTP_CONSTANTS} from '../config/http-constants'
import {requestHttp} from '../config/http-server'
import { useState } from 'react'


export const GetAvaibleCats = async () => {

    try {        
        const endpoint = HTTP_CONSTANTS.catlist
        const response = await requestHttp('get', endpoint)
        const { status, avaibleCats } = response
        
        return{avaibleCats}    
         
              
    } catch(err) {
        
      console.error(err)
        
    }

      
}