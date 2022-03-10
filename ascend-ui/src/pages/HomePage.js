import { useState } from "react";
import ClimbSearch from "../components/ClimbSearch";
import Weather from "../components/Weather";
import { HomeHeader } from "../components/HomeHeader";

function HomePage() {
  const [filterHelperShown, setFilterHelperShown] = useState(false);

  return (
    <>
      <HomeHeader />
      <ClimbSearch placeholder="Search for a climb, location, or quality."></ClimbSearch>
      <div
        className="home-filters-container"
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
