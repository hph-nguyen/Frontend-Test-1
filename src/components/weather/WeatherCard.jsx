import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { useEffect, useState } from "react";
import { getSelectedCityWeather } from "../../services/dataService";

export default function ThreeDCardDemo() {
  const [location, setLocation] = useState("Nürnberg");
  const [data, setData] = useState(null);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

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

  return (
    <>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem className="text-xl font-bold text-neutral-600 dark:text-white">
            Heute Wetter
            <select value={location} onChange={handleLocationChange} className="ml-2">
              <option value="Berlin">Berlin</option>
              <option value="München">München</option>
              <option value="Hamburg">Hamburg</option>
            </select>
          </CardItem>
          <CardItem as={"p"} className="text-xl font-bold text-neutral-600 dark:text-white">
            <p>
              <img
                src="//cdn.weatherapi.com/weather/64x64/day/116.png"
                className="  object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
              Die aktuelle Temperatur in {location} beträgt {data?.current.temp_c}°C und {data?.current.condition.text}.
            </p>
          </CardItem>
        </CardBody>
      </CardContainer>
    </>
  );
}
