import "../App.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ClimbDetails() {
  const [climb, setClimb] = useState([]);

  const { _id } = useParams();

  const loadClimb = async () => {
    const response = await fetch(`/climb/${_id}`);
    const climb = await response.json();
    setClimb(climb);
  };

  useEffect(() => {
    // Loads the climb.
    loadClimb();

    // Sets the document's title.
    document.title = `Ascend - ${climb.name}`;
  }, [climb.name]);

  return (
    <>
      <Link className="App-Link" to={"/"}>
        Home
      </Link>
      <nav>
        {climb.state} - {climb.region} - {climb.wall} -{" "}
        <Link to={"/search/"}>Castle Rock</Link>
      </nav>
      <h2>{climb.name}</h2>
      <div className="difficulty-header">
        <h3>{climb.grade}</h3>
        <h4>{climb.runnout}</h4>
      </div>
      <div>
        <h5>Description</h5>
        <body>{climb.description}</body>
      </div>
      <div>
        <h5>Tags:</h5>
        <div>variable number of tags shown here</div>
      </div>
      <div>
        <h5>Photos:</h5>
        <img src="/images/castle-rock-regional.jpg"></img>
      </div>
      <div>
        <h5>Location:</h5>
        <div>Map Widget Placeholder</div>
      </div>
    </>
  );
}

export default ClimbDetails;
