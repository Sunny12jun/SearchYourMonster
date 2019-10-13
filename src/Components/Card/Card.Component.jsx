import React from 'react'
import '../Card/card.styles.css'

export const Card = (props) => (
    <div className="card-container" >
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2`}></img>
        <h3 Key={props.monster.Key}>{props.monster.name}</h3>
       <h4  >{props.monster.email}</h4>
    </div>

)