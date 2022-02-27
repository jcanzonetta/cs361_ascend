import "../App.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ClimbSearch from "../components/ClimbSearch";
import { useState, useEffect } from "react";
import ClimbResultsList from "../components/ClimbResultsList";

function SearchPage() {
  const [climbs, setClimbs] = useState([]);
  const navigate = useNavigate();

  const location = useLocation();

  const loadClimbs = async () => {
    const response = await fetch("/climbs");
    const climbs = await response.json();
    setClimbs(climbs);
  };

  /** Sets the title. */
  useEffect(() => {
    loadClimbs();
    document.title = `Ascend - ${location.pathname}`;
  }, []);

  return (
    <>
      <Link className="App-Link" to={"/"}>
        Home
      </Link>
      <ClimbSearch></ClimbSearch>
      <h3>Climbs:</h3>
      <ClimbResultsList climbs={climbs}></ClimbResultsList>
      <div>California - San Francisco Bay Area - Mount Diablo - </div>
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
