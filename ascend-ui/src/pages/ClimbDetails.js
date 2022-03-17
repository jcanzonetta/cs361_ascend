import "../App.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ClimbPhotos from "../components/ClimbPhotos";
import Map from "../components/Map";
import ClimbResult from "../components/ClimbResult";
import { IoMdPhotos } from "react-icons/io";
import { MdDescription, MdLocationPin } from "react-icons/md";
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
    document.title = `Ascend - ${climb.route_name}`;
  }, [climb.route_name]);

  return (
    <>
      <HomeHeader />
      <div className="climb-detail-container">
        <ClimbResult climb={climb}></ClimbResult>
        <h2>{climb.route_name}</h2>
        <div className="difficulty-header">
          <h3>{"grade" in climb ? climb.grade.YDS : <p>Ungraded</p>}</h3>
          <h4
            className="tooltip"
            tooltip-data={
              'G: Ample protection.\nPG: Generally good protection with a few sections of poor protection.\nPG-13: Fair protection that may result in a long fall.\nR: "Runnout." Limited Protection and potentital for seriouis injury.\nX: Very limited or no protection with ground fall potential.'
            }
          >
            {climb.safety}
          </h4>
        </div>
        <div>
          <h5>
            <MdDescription />
            Description:
          </h5>
          <div>{climb.description}</div>
          <h5>Location:</h5>
          <div>
            {climb.location && climb.location[0].length > 0
              ? climb.location
              : "No additional location information."}
          </div>
          <h5>Protection:</h5>
          <div>
            {climb.protection && climb.protection[0].lnegth > 0
              ? climb.protection
              : "No additional protection information."}
          </div>
        </div>
        <div>
          <h5>
            <IoMdPhotos />
            Photos:
          </h5>
          <ClimbPhotos photos_array={climb.photos} />
        </div>
        <div>
          <h5>
            <MdLocationPin />
            Location:
          </h5>
          {"metadata" in climb ? (
            <Map coord={climb.metadata.parent_lnglat} />
          ) : (
            <div> No map data. </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ClimbDetails;
