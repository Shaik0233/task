import React from "react";

function Card(props) {
  return (
    <>
      <div className="card">
        <p>{props.para}</p>
      </div>
    </>    
  );
}

export default Card;
