import React, {useEffect, useState} from 'react'
import {Avatar} from './../../Profile/ProfileDetail/Avatar'
import { HTTP_CONSTANTS } from '../../../../config/http-constants'
import { requestHttp } from '../../../../config/http-server'

export const Loved = ({ love }) => {

    const [catsLoved, setCatsLoved] = useState([])
    const LovedList = async () => {
        try {
            const endpoint = HTTP_CONSTANTS.loved
            const response = await requestHttp('get', endpoint)
            const {catloved} = response
            setCatsLoved(catloved)
            
        } catch (err) {
            console.error(err)
        }
    }

    useEffect( () => {
       LovedList()

        return () => {}
    }, [])

    return(
        <div className="loveds">
        <hr/> <h3> They love me! </h3> <hr/> <br/>
            {  
        catsLoved.map( (item, key) => <Avatar key = {key} image = {item.image} nick = {item.nick} /> )
        
        }
            
        </div>
        )
    }



