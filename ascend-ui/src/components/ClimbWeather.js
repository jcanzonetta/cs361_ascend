function ClimbingWeather() {
  const weather_data = require("./weather.json");

  let wind_direction = weather_data["wind_direction"];
  if (wind_direction < 45 || wind_direction >= 315) {
    wind_direction = "N";
  } else if (wind_direction >= 45 && wind_direction < 135) {
    wind_direction = "E";
  } else if (wind_direction >= 135 && wind_direction < 225) {
    wind_direction = "S";
  } else if (wind_direction >= 225 && wind_direction < 315) {
    wind_direction = "W";
  }

  return (
    <>
      <div>Temperature: {weather_data["temperature"]}</div>
      <div>Humidity: {weather_data["humidity"]}%</div>
      <div>
        Wind: {weather_data["wind_speed"]}mph {wind_direction}
      </div>
    </>
  );
}

export default ClimbingWeather;
