import { GiMountaintop } from "react-icons/gi";
import { Link } from "react-router-dom";

// Small component to link back to the Ascend homepage when clicked.
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
