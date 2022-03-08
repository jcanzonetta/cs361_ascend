import "../App.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ClimbPhotos from "../components/ClimbPhotos";
import Map from "../components/Map";

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
        <Link to={`/find?search=${climb.state}`}>{climb.state}</Link> -{" "}
        <Link to={`/find?search=${climb.region}`}>{climb.region}</Link> -{" "}
        <Link to={`/find?search=${climb.wall}`}>{climb.wall}</Link> -{" "}
        <Link to={`/find?search=${climb.name}`}>{climb.name}</Link>
      </nav>
      <h2>{climb.name}</h2>
      <div className="difficulty-header">
        <h3>{climb.grade}</h3>
        <h4>{climb.runnout}</h4>
      </div>
      <div>
        <h5>Description</h5>
        <div>{climb.description}</div>
      </div>
      <div>
        <h5>Tags:</h5>
        <div>variable number of tags shown here</div>
      </div>
      <div>
        <h5>Photos:</h5>
        {console.log(climb.photos)}
        {console.log(climb.name)}
        <ClimbPhotos photos_array={climb.photos} />
      </div>
      <div>
        <h5>Location:</h5>
        <Map coord={climb.coordinates} />
      </div>
    </>
  );
}

export default ClimbDetails;
