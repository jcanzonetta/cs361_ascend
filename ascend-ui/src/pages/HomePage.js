import ClimbSearch from "../components/ClimbSearch";
import Weather from "../components/Weather";
import { HomeHeader } from "../components/HomeHeader";

function HomePage() {
  return (
    <>
      <HomeHeader />
      <ClimbSearch placeholder="Search for a climb, location, or quality."></ClimbSearch>
      <Weather className="weather-component"></Weather>
    </>
  );
}

export default HomePage;
