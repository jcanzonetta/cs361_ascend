import Climb from "./ClimbResult";

function ClimbResultsList({ climbs }) {
  return (
    <div>
      {climbs.map((climb) => (
        <Climb climb={climb} />
      ))}
    </div>
  );
}

export default ClimbResultsList;
