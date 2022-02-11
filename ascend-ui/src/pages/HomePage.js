import { useEffect } from "react";
import { Link } from "react-router-dom";
import ClimbSearch from "../components/ClimbSearch";

function HomePage() {
  /** Sets the title. */
  useEffect(() => {
    document.title = "Ascend";
  }, []);

  return (
    <>
      <h1>Ascend</h1>
      <ClimbSearch></ClimbSearch>
      <div>Filter Placeholder</div>
      <Link to={"/search"}>Simulate Searching "Castle Rock"</Link>
    </>
  );
}

export default HomePage;
