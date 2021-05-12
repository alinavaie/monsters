import "./cardList.css";

import Card from "../card/card";
import React from "react";

function CardList(props) {
  return (
    <div className="card-list">
      {props.monsters.map((monster, index) => (
        <Card key={index} monster={monster} />
      ))}
    </div>
  );
}

export default CardList;
