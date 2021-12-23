import React, { useState } from "react";
import "./index.css";

function Room() {
  const [lit, setlit] = useState(true);
  const [temp, settemp] = useState(22);
  const brightedness = lit ? "lit" : "dark";
  const temperature = temp;

  return (
    <div className={`room ${brightedness}`}>
      the room is {brightedness}
      <br />
      <button
        onClick={() => {
          setlit(true);
          settemp(temp);
        }}
      >
        On
      </button>
      <button
        onClick={() => {
          setlit(false);
          settemp(temp);
        }}
      >
        Off
      </button>
      <br />
      the temperature is {temperature}
      <br />
      <button onClick={() => settemp(temp + 1)}>+</button>
      <button onClick={() => settemp(temp - 1)}>-</button>
    </div> 
    
  );
}

export default Room;