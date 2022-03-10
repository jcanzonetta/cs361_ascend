import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";

function ClimbResult({ climb }) {
  return (
    <div className="single-climb-result">
      <Link to={`/find?search=${climb.state}`}>
        <span>{climb.state}</span>
      </Link>
      <MdArrowForwardIos />
      <Link to={`/find?search=${climb.region}`}>
        <span>{climb.region}</span>
      </Link>
      <MdArrowForwardIos />
      <Link to={`/find?search=${climb.wall}`}>
        <span>{climb.wall}</span>
      </Link>
      <MdArrowForwardIos />
      <Link to={`/climbdetails/${climb._id}`}>
        <span>{climb.name}</span>
      </Link>
    </div>
  );
}

export default ClimbResult;
