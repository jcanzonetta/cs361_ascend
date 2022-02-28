import { Link } from "react-router-dom";

function ClimbResult({ climb }) {
  return (
    <div>
      <Link to={`/find?search=${climb.state}`}>
        <span>{climb.state}</span>
      </Link>
      <span> {"=>"} </span>
      <Link to={`/find?search=${climb.region}`}>
        <span>{climb.region}</span>
      </Link>
      <span> {"=>"} </span>
      <Link to={`/find?search=${climb.wall}`}>
        <span>{climb.wall}</span>
      </Link>
      <span> ={">"} </span>
      <Link to={`/climbdetails/${climb._id}`}>
        <span>{climb.name}</span>
      </Link>
    </div>
  );
}

export default ClimbResult;
