import axios from "axios";

import { KEY_API_WEATHER } from "@env";

async function getWeather(lat: number, lon: number) {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY_API_WEATHER}&units=metric&lang=pt_br`;

  const queryWeather = await axios.get(URL);
  return queryWeather.data;
}

export default getWeather;
