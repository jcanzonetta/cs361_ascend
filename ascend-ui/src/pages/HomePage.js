import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ClimbSearch from "../components/ClimbSearch";
import Weather from "../components/Weather";

function HomePage() {
  const [filterHelperShown, setFilterHelperShown] = useState(false);
  const navigate = useNavigate();

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
