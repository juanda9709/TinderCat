import React from 'react'
import { InterestOne } from './Interest_one'
import {INTEREST} from '../../../../data/db'
export const Interests = () => {

    return (
    <div className="interest-container">
        <hr/><h3> Interest List</h3> <hr/>
        <div className= "Interest-box">
        {   

            INTEREST.map( (item, key) => <InterestOne key = {key} name = {item.name} status = {item.status}/>)
        }
            </div>
            </div>
    )
}
