import { Link } from "react-router-dom";

function ClimbResult({ climb }) {
  return (
    <div>
      {console.log(climb)}
      <span>{climb.state}</span>
      <span> {"=>"} </span>
      <span>{climb.region}</span>
      <span> {"=>"} </span>
      <span>{climb.wall}</span>
      <span> ={">"} </span>
      <Link to={`/climbdetails/${climb._id}`}>
        <span>{climb.name}</span>
      </Link>
    </div>
  );
}

export default ClimbResult;
