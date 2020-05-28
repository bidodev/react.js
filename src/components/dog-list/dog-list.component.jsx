import React from "react";
import { DogCard } from "../dogs-card/dog.component.jsx";
import "./dog-list.styles.scss";

export const DogsList = props => {
  return (
    <div className="dogs-list">
      {props.dogs.map(dog => (
        <DogCard dog={dog} />
      ))}
    </div>
  );
};
