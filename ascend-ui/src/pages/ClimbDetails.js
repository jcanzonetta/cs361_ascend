import "../App.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ClimbPhotos from "../components/ClimbPhotos";
import Map from "../components/Map";
import ClimbResult from "../components/ClimbResult";
import { IoMdPhotos } from "react-icons/io";
import { MdDescription, MdLocationPin, MdTag } from "react-icons/md";
import { HomeHeader } from "../components/HomeHeader";

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
      <HomeHeader />
      <div className="climb-detail-container">
        <ClimbResult climb={climb}></ClimbResult>
        <h2>{climb.name}</h2>
        <div className="difficulty-header">
          <h3>{climb.grade}</h3>
          <h4>{climb.runnout}</h4>
        </div>
        <div>
          <h5>
            <MdDescription />
            Description:
          </h5>
          <div>{climb.description}</div>
        </div>
        <div>
          <h5>
            <MdTag />
            Tags:
          </h5>
          <div>variable number of tags shown here</div>
        </div>
        <div>
          <h5>
            <IoMdPhotos />
            Photos:
          </h5>
          {console.log(climb.photos)}
          {console.log(climb.name)}
          <ClimbPhotos photos_array={climb.photos} />
        </div>
        <div>
          <h5>
            <MdLocationPin />
            Location:
          </h5>
          <Map coord={climb.coordinates} />
        </div>
      </div>
    </>
  );
}

export default ClimbDetails;
