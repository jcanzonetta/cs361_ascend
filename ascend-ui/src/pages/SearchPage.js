import "../App.css";
import { Link } from "react-router-dom";
import ClimbSearch from "../components/ClimbSearch";

function SearchPage() {
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
