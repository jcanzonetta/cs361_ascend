import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";

function ClimbResult({ climb }) {
  return (
    <div className="single-climb-result">
      <Link to={`/find?search=${climb.state}`}>
        <span>{climb.state}</span>
      </Link>
      <MdArrowForwardIos />
      {"region" in climb && (
        <>
          <Link to={`/find?search=${climb.region}`}>
            <span>{climb.region}</span>
          </Link>
          <MdArrowForwardIos />
        </>
      )}
      {"metadata" in climb ? (
        <Link to={`/find?search=${climb.metadata.parent_sector}`}>
          <span>{climb.metadata.parent_sector}</span>
        </Link>
      ) : (
        <span>Loading...</span>
      )}
      <MdArrowForwardIos />
      <Link to={`/climbdetails/${climb._id}`}>
        <span>{climb.route_name}</span>
      </Link>
    </div>
  );
}

export default ClimbResult;
