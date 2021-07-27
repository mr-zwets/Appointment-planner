import React from "react";
import {Tile} from '../tile/Tile.js'

export const TileList = (props) => {
  return (
    <div>
      {props.list.map(item => (<Tile info={item} key={'name' in item?item.name:item.title } />))}
    </div>
  );
};
