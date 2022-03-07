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
    <div className="weather-component">
      {weather.length > 0 ? (
        weather.map((line, key) => {
          return <p key={key}>{line}</p>;
        })
      ) : (
        <p>Loading Weather...</p>
      )}
    </div>
  );
}

export default Weather;
