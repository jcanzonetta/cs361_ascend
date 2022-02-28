import "../App.css";
import { Link, useLocation } from "react-router-dom";
import ClimbSearch from "../components/ClimbSearch";
import { useState, useEffect } from "react";
import ClimbResultsList from "../components/ClimbResultsList";

function SearchPage() {
  const [climbs, setClimbs] = useState([]);
  const location = useLocation();

  const loadClimbs = async () => {
    const response = await fetch(`/climbs${location.search}`);
    const climbs = await response.json();
    setClimbs(climbs);
  };

  useEffect(() => {
    loadClimbs();
    document.title = `Ascend - searching for "${location.search}"`;
  }, [location.search]);

  return (
    <>
      <Link className="App-Link" to={"/"}>
        Home
      </Link>
      <ClimbSearch></ClimbSearch>
      <h3>Climbs:</h3>
      <ClimbResultsList climbs={climbs}></ClimbResultsList>
    </>
  );
}

export default SearchPage;
