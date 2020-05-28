import React from "react";
import "./dog-list.styles.scss";

export const DogsList = props => {
  return (
    <div className="dogs-list">
      {props.dogs.map(dog => (
        <figure>
          <img src={`${dog}`} alt="" />
        </figure>
      ))}
    </div>
  );
};
