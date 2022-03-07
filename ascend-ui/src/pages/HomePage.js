import { useState } from "react";
import ClimbSearch from "../components/ClimbSearch";
import Weather from "../components/Weather";

function HomePage() {
  const [filterHelperShown, setFilterHelperShown] = useState(false);

  return (
    <>
      <h1 className="home-header">Ascend</h1>
      <ClimbSearch placeholder="Search for a climb, location, or quality."></ClimbSearch>
      <div
        className="home-filters"
        onMouseEnter={() => setFilterHelperShown(true)}
        onMouseLeave={() => setFilterHelperShown(false)}
      >
        Additional Filters:{" "}
        {filterHelperShown && (
          <div>Apply a filter to narrow down your search!</div>
        )}
      </div>
      <div className="home-filters">[Common filters will show up here.]</div>
      <Weather className="weather-component"></Weather>
    </>
  );
}

export default HomePage;
