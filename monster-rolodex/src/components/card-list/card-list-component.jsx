import React from 'react';

const CardList = (props) => {
  const { monsters } = props;
  return monsters.map((monster) => <h1 key={monster.id}>{monster.name}</h1>);
};

export default CardList;
