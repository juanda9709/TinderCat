import React, {useEffect, useState} from 'react'
import { InterestOne } from './Interest_one'
//import {INTEREST} from '../../../../data/db'
import { HTTP_CONSTANTS } from '../../../../config/http-constants'
import { requestHttp } from '../../../../config/http-server'

export const Interests = ({ interestCat = [], Notificador}) => {

const [interestList, setInterestList] = useState([])
const [interestListCat, setInterestListCat] = useState(interestCat)    
const [interestWithStatus, setInterestWithStatus] = useState([])  
   


const getInterestList = async () => {
    try {
        const endpoint = HTTP_CONSTANTS.interests
        const response = await requestHttp('get', endpoint)
        const {interests} = response
        setInterestList(interests)
    } catch (err) {
        console.error(err)
    }
}
    useEffect( () => {
        getInterestList()

        return () => {}
    }, [])

    useEffect( () => {
        
        mergeInterestList()
        
        return () => {}
    }, [interestList, interestListCat])

    const mergeInterestList = () => {
        for(let i = 0; i<interestList.length; i++){
            const interestItem = interestList[i]
            const found = interestListCat.find(e => e === interestItem._id)
            if (found) {
                interestItem.status = true
            } else {
                interestItem.status = false
            }
        }
        setInterestWithStatus([...interestList])
   }

  
    const interestOneHandler = async (interestId, status) => {
        try {     
              
            if(!status){
                const data = {interestId: interestId}
                const endpoint = HTTP_CONSTANTS.addinterest      
                const response = await requestHttp('post', endpoint, data)
                const {cat} = response
                setInterestListCat(cat.interests)
                
                
            } else {
                const data = {interestId: interestId}
                const endpoint = HTTP_CONSTANTS.removeinterest     
                const response = await requestHttp('delete', endpoint, data)                
                const {cat} = response
                setInterestListCat(cat.interests)
                
            }                       
         } catch (err) {
            console.error('Error: ', err)        
            }

         Notificador()   
    }

    
    return (
    <div className="interest-container">
        <hr/><h3> Interest List</h3> <hr/>
        <div className= "Interest-box">
        {  
        interestWithStatus.map( (item, key) => <InterestOne key = {key} name = {item.interest} status = {item.status} id={item._id} notify = {interestOneHandler} /> )
        
        }
        </div>
    </div>
    )
}


