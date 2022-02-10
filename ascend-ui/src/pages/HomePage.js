import { Link } from "react-router-dom";
import ClimbSearch from "../components/ClimbSearch";

function HomePage() {
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
