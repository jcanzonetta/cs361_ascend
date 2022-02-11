import "../App.css";
import { Link } from "react-router-dom";
import ClimbSearch from "../components/ClimbSearch";
import { useEffect } from "react";

function SearchPage() {
  /** Sets the title. */
  useEffect(() => {
    document.title = "Ascend - Search Query Goes Here";
  }, []);

  return (
    <>
      <Link className="App-Link" to={"/"}>
        Home
      </Link>
      <ClimbSearch></ClimbSearch>
      <Link to={"/climbdetails"}>Skip Search to Go to Castle Rock</Link>
    </>
  );
}

export default SearchPage;
