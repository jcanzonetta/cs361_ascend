import "../App.css";
import { Link } from "react-router-dom";
import ClimbSearch from "../components/ClimbSearch";
import { useEffect } from "react";

function SearchPage() {
  /** Sets the title. */
  useEffect(() => {
    document.title = "Ascend - Search Query Goes Here";
  }, []);

  // For MVP Testing Purposes
  const climbs = [
    { id: 1, name: "Castle Rock" },
    { id: 2, name: "Storm the Castle" },
  ];

  const climb = climbs[1];

  return (
    <>
      <Link className="App-Link" to={"/"}>
        Home
      </Link>
      <ClimbSearch></ClimbSearch>
      <h3>Climbs:</h3>
      <div>
        California - San Francisco Bay Area - Mount Diablo -{" "}
        <Link
          to={{
            pathname: `/climbdetails/${climb.id}`,
            state: { climbs: climb },
          }}
        >
          Castle Rock
        </Link>
      </div>
      <div>Colorado - Boulder - Boulder Canyon - Storm the Castle</div>
      <div>Idaho - South Idaho - Castle Rocks - Castle Rock South Face</div>
      <h3>Locations:</h3>
      <div>California - San Francisco Bay Area - Castle Rock State Park</div>
      <div>Idaho - South Idaho - Castle Rocks</div>
      <div>Tenesee - Central Tennesee - Castle Rocks</div>
    </>
  );
}

export default SearchPage;
