import { Link } from "react-router-dom";

function ClimbResult({ climb }) {
  console.log(climb._id);
  return (
    <div>
      <span>State</span>
      <span>Region</span>
      <span>Wall</span>
      <Link to={`/climbdetails/${climb._id}`}>
        <span>{climb.name}</span>
      </Link>
    </div>
  );
}

export default ClimbResult;
