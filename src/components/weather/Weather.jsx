import { useEffect, useState } from "react";
import { getSelectedCityWeather } from "../../services/dataService";
import styles from "./Weather.module.css";

function Weather() {
  const [location, setLocation] = useState("Nürnberg");
  const [data, setData] = useState(null);

  const fetchSelectedCity = async () => {
    try {
      const data = await getSelectedCityWeather(location);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSelectedCity();
    const intervalId = setInterval(fetchSelectedCity, 30000);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line
  }, [location]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className={styles.weather}>
      <div>
        <h2>Wetter nach Ort suchen</h2>
        <select value={location} onChange={handleLocationChange}>
          <option value="Berlin">Berlin</option>
          <option value="München">München</option>
          <option value="Hamburg">Hamburg</option>
          <option value="Nürnberg">Nürnberg</option>
        </select>
        <h2>
          Die aktuelle Temperatur in {location} beträgt {data?.current.temp_c}°C und das Wetter ist{" "}
          {data?.current.condition.text}.
        </h2>
      </div>
    </div>
  );
}

export default Weather;
