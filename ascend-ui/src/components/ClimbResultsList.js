import Climb from "./ClimbResult";

function ClimbResultsList({ climbs }) {
  return (
    <div>
      {climbs.length > 0 ? (
        climbs.map((climb, key) => <Climb climb={climb} key={key} />)
      ) : (
        <p>No results.</p>
      )}
    </div>
  );
}

export default ClimbResultsList;
