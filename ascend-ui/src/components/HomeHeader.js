import { GiMountaintop } from "react-icons/gi";
import { Link } from "react-router-dom";

export function HomeHeader({}) {
  return (
    <h1 className="home-header">
      <Link
        className="App-Link"
        to={"/"}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <GiMountaintop />
        Ascend
      </Link>
    </h1>
  );
}
