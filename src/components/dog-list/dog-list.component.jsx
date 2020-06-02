import React from "react";
import { DogCard } from "../dog-card/dog.component.jsx";
import "./dog-list.styles.scss";

export const DogsList = props => {
  console.log(props);
  return (
    <div className="dogs-list">
      {props.dogs.map(dog => (
        <DogCard dog={dog} />
      ))}
    </div>
  );
};
