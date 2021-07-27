import React from "react";

export const Tile = (props) => {
  return (
    <div className="tile-container">
      {
        Object.keys(props.info).map(key => 
          (<p className="tile" key={key+props.info[key]}>
            {key=='phoneNr'? 'phone number':key}: 
            {' '+props.info[key]}
          </p>)
        )
      }
    </div>
  );
};
