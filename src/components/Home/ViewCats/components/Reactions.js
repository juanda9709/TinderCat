import React from 'react'
import { ReactionIcon } from './Reaction-icon'
import { HTTP_CONSTANTS } from './../../../../config/http-constants'
import { requestHttp } from './../../../../config/http-server'

export const Reactions = ({cat , changeCat}) => {


    const unlikedCat = async () => {
        if (Object.entries(cat).length !== 0 ){
            
        try {
            const endpoint = HTTP_CONSTANTS.unliked
            const bodyData = {
                catIdUnliked: cat._id
            }
            const response = await requestHttp('post', endpoint, bodyData)
            const {status} = response
            console.log(bodyData, response, cat._id )
        } catch (err) {
            console.error(err)
        }}
       
        changeCat()
    }
    
    const likedCat = async () => {
        if (Object.entries(cat).length !== 0 ){
            
        try {
            const endpoint = HTTP_CONSTANTS.liked
            const bodyData = {
                catIdLiked: cat._id
            }
            const response = await requestHttp('post', endpoint, bodyData)
            const {status} = response
            console.log(bodyData, response, cat._id )
        } catch (err) {
            console.error(err)
        }}
        changeCat()    
    }

    return(
    <div className="reactions">
        <ReactionIcon name="heart-dislike" interactionClick={unlikedCat}/>
        <ReactionIcon color="#C800AA" name="heart" interactionClick={likedCat} />
    </div>
    )
}