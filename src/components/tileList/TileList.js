import React from "react";
import {Tile} from '../tile/Tile.js'

export const TileList = (props) => {
  return (
    <div>
      {props.contacts.map(contact => (<Tile info={contact} key={contact.name} />))}
    </div>
  );
};
