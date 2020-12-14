import React from 'react'
import { useSelector } from 'react-redux'
import CardInfo from '../CardInfo/CardInfo'
import './style.css'

const Card = ({handlePopUPToggle}) => {
    const eventInfo = useSelector(state =>state.calenderEvent )
    console.log("eventInfo",eventInfo) 
    return (
        <div className="card_main" >
            <h4> {eventInfo.weekName} {eventInfo.monthName} {eventInfo.day} </h4>
            {eventInfo && eventInfo.eventList.length > 0 ? eventInfo.eventList.map((item,index) => (
                <CardInfo key={item._id} eventDetails={item} handlePopUPToggle={handlePopUPToggle} />
            ))
            :
               <b style={{textAlign:'center'}} > No session arrange </b>
            }
          
            
        </div>
    )
}

export default Card
