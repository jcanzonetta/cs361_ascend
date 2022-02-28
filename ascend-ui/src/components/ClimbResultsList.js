import Climb from "./ClimbResult";

function ClimbResultsList({ climbs }) {
  return (
    <div>
      {climbs.map((climb, key) => (
        <Climb climb={climb} key={key} />
      ))}
    </div>
  );
}

export default ClimbResultsList;
