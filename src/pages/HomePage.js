import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ClimbDetails from "./ClimbDetails";

function HomePage() {
  return (
    <>
      <h1>Ascend</h1>
      <div>Search Placeholder</div>
      <div>Filter Placeholder</div>
      <nav>
        <Link to={"/climbdetails"}>Skip Search to Go to Castle Rock</Link>
      </nav>
    </>
  );
}

export default HomePage;
