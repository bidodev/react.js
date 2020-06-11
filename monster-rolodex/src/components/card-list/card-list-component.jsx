import React from 'react';
import CardMonster from '../card-monster/card-monster-component';

const CardList = (props) => (
  <div className="card-list">
    {props.monsters.map(monster => (
      <CardMonster monster={monster} />
    ))}
  </div>
)
export default CardList;
