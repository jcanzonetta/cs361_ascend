import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

function ClimbDetails() {
  return (
    <>
      <Link className="App-Link" to={"/"}>
        Home
      </Link>
      <h2>Castle Rock</h2>
      <div className="difficulty-header">
        <h3>5.6</h3>
        <h4>x</h4>
      </div>
      <div>
        <h5>Description</h5>
        <body>
          From Jim Thornburg’s guidebook, “If you can scramble up to the top of
          Castle rock (5.2, carved steps) you can top rope this. Leading it
          requires gear to 1.5” and is unrpotected at the crux.
        </body>
      </div>
      <div>
        <h5>Tags:</h5>
        <div>variable number of tags shown here</div>
      </div>
      <div>
        <h5>Weather:</h5>
        <div>Weather Widget Placeholder</div>
      </div>
      <div>
        <h5>Location:</h5>
        <div>Map Widget Placeholder</div>
      </div>
    </>
  );
}

export default ClimbDetails;
