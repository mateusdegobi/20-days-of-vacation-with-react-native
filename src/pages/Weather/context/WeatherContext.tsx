import { createContext, useContext, useEffect, useState } from "react";
import getWeather from "../api/getWeather";
import { Periods } from "../Weather";

const mockWeather = {
  latitude: -17.5425369,
  longitute: -39.7234283,
};

interface IInitialContextProps {
  currentPeriod: Periods;

  city: string;
  weatherDescription: string;
  temperature: number;
  windSpeed: number;
  humidity: number;

  iconCode: string;
}

const initialContext: IInitialContextProps = {
  currentPeriod: "day",
  city: "",
  temperature: 0,
  windSpeed: 0,
  humidity: 0,
  iconCode: "",
  weatherDescription: "",
};

const WeatherContext = createContext(initialContext);

const UseWeatherContext = () => useContext(WeatherContext);

const WeatherContextProvider = ({ children }) => {
  const [currentPeriod, setCurrentPeriod] = useState<Periods>("day");

  const [city, setCity] = useState("Teixeira de Freitas");
  const [temperature, setTemperature] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [iconCode, setIconCode] = useState("");
  const [weatherDescription, setWeatherDescription] = useState("");

  useEffect(() => {
    (async () => {
      const data = await getWeather(
        mockWeather.latitude,
        mockWeather.longitute
      );

      setTemperature(data.main.temp);
      setWindSpeed(data.wind.speed);
      setHumidity(data.main.humidity);

      setIconCode(data.weather[0].icon);
      setWeatherDescription(data.weather[0].description);
    })();
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        currentPeriod,
        city,
        temperature,
        windSpeed,
        humidity,
        iconCode,
        weatherDescription,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { UseWeatherContext };
export default WeatherContextProvider;
