import "../App.css";
import { useLocation } from "react-router-dom";
import ClimbSearch from "../components/ClimbSearch";
import { useState, useEffect } from "react";
import ClimbResultsList from "../components/ClimbResultsList";
import { HomeHeader } from "../components/HomeHeader";

function SearchPage() {
  const [climbs, setClimbs] = useState([]);
  const [query, setQuery] = useState();
  const location = useLocation();

  // Fetches a list of climbs based on the search parameter in the url.
  const loadClimbs = async () => {
    const response = await fetch(`/climbs${location.search}`);
    const climbs = await response.json();
    setClimbs(climbs);
  };

  // Sets the query in a user friendly format to later be included in the browser titlebar.
  const loadQuery = async () => {
    const query = new URLSearchParams(location.search).get("search");
    setQuery(query);
  };

  // Re-set the list of climbs and retrieve a new, user-friendly query if the search parameter changes in the url.
  useEffect(() => {
    loadClimbs();
    loadQuery();
  }, [location.search]);

  // Change the browser title only once the query is updated.
  useEffect(() => {
    document.title = `Ascend - searching for: ${query}`;
  }, [query]);

  return (
    <>
      <HomeHeader />
      <ClimbSearch initialValue={query}></ClimbSearch>
      <div className="search-elements">
        <h3>Climbs:</h3>
        <ClimbResultsList climbs={climbs}></ClimbResultsList>
      </div>{" "}
    </>
  );
}

export default SearchPage;
