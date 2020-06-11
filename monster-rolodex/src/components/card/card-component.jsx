import React from 'react';
import './card.styles.scss'

const Card = (props) => {
  return (
      <div className="card-container">
          <img src={`https://robohash.org/${props.monster.id}?set=set4`} alt={props.monster.name}/>
      <h1>{props.monster.name}</h1>
    </div>
  )
}
export default Card;
