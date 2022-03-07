import "../App.css";
import { Link, useLocation } from "react-router-dom";
import ClimbSearch from "../components/ClimbSearch";
import { useState, useEffect } from "react";
import ClimbResultsList from "../components/ClimbResultsList";

function SearchPage() {
  const [climbs, setClimbs] = useState([]);
  const [query, setQuery] = useState();
  const location = useLocation();

  const loadClimbs = async () => {
    const response = await fetch(`/climbs${location.search}`);
    const climbs = await response.json();
    setClimbs(climbs);
  };

  const loadQuery = async () => {
    const query = new URLSearchParams(location.search).get("search");
    setQuery(query);
  };

  useEffect(() => {
    loadClimbs();
    loadQuery();
  }, [location.search]);

  useEffect(() => {
    document.title = `Ascend - searching for "${query}"`;
  }, [query]);

  return (
    <>
      <Link className="App-Link" to={"/"}>
        Home
      </Link>
      <ClimbSearch initialValue={query}></ClimbSearch>
      <div className="search-elements">
        <h3>Climbs:</h3>
        <ClimbResultsList climbs={climbs}></ClimbResultsList>
      </div>{" "}
    </>
  );
}

export default SearchPage;
