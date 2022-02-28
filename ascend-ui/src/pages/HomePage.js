import { useState } from "react";
import ClimbSearch from "../components/ClimbSearch";
import Weather from "../components/Weather";

function HomePage() {
  const [filterHelperShown, setFilterHelperShown] = useState(false);

  return (
    <>
      <h1>Ascend</h1>
      <ClimbSearch></ClimbSearch>
      <div
        onMouseEnter={() => setFilterHelperShown(true)}
        onMouseLeave={() => setFilterHelperShown(false)}
      >
        Additional Filters:{" "}
        {filterHelperShown && (
          <div>Apply a filter to narrow down your search!</div>
        )}
      </div>
      <div>[Common filters will show up here.]</div>
      <Weather></Weather>
    </>
  );
}

export default HomePage;
