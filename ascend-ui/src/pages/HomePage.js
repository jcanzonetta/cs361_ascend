import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClimbSearch from "../components/ClimbSearch";

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
      <Link to={"/search"}>Simulate Searching "Castle Rock"</Link>
    </>
  );
}

export default HomePage;
