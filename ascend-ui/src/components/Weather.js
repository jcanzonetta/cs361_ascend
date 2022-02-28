import { useEffect, useState } from "react";

function Weather() {
  const [weather, setWeather] = useState([]);

  const loadWeather = async () => {
    const response = await fetch("/weather");
    const weather = await response.json();
    setWeather(weather);
  };

  useEffect(() => {
    loadWeather();
  }, []);

  return (
    <div>
      {weather.map((line, key) => {
        return <p key={key}>{line}</p>;
      })}
    </div>
  );
}

export default Weather;
