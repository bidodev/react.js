import React from 'react';
import './card.monster.styles.scss'

const CardMonster = (props) => {
  return (
    <div>
      <h1>{props.monster.name}</h1>
    </div>
  )
}
export default CardMonster;
