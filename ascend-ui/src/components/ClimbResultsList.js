import Climb from "./ClimbResult";

// Reduces the list of climbs to the first 20 elements and returns each
// individual Climb component.
function ClimbResultsList({ climbs }) {
  return (
    <>
      {climbs.length > 0 ? (
        climbs
          .slice(0, 20)
          .map((climb, key) => <Climb climb={climb} key={key} />)
      ) : (
        <p>No results.</p>
      )}
    </>
  );
}

export default ClimbResultsList;
