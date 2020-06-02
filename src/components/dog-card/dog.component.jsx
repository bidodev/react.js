import React from "react";
import "./dog.styles.scss";

export const DogCard = props => {
  return (
    <figure>
      <img src={`${props.dog}`} alt="" />
    </figure>
  );
};
