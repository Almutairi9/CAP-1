import React, { useState, useEffect } from "react";
import Board from "../Board";
// import Image from "../Start/peony.gpj"; 
import "./style.css"


function Start() { 
  //  <img ></img>
  const [options, setOptions] = useState(null);

  return (
    <div className="back">
      <div className="container">
        <h1>Flip Card Game</h1>
        <div>
          {options === null ? (
            <>
              <button className="btn" onClick={() => setOptions(8)}>Easy</button>
              <button className="btn" onClick={() => setOptions(12)}>Medium</button>
              <button onClick={() => setOptions(16)}>Hard</button>
            </>
          ) : (
            <>
              <button className="btn"
                onClick={() => {
                  const prevOptions = options;
                  setOptions(null);
                  setTimeout(() => {
                    setOptions(prevOptions);
                  }, 5);
                }}
              >
                Start Over
              </button>
              <button onClick={() => setOptions(null)}>Home</button>
            </>
          )}
        </div>
      </div>

      {options ? (
        <Board options={options} setOptions={setOptions} />
      ) : (
        <h2>Let's Start!</h2>
      )}
    </div>
  );
}

export default Start;
