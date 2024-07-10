import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import axios from "axios";

function useWeatherData() {

  const {il_adi} = useSelector((state) => state.city)
  const API_KEY = useSelector((state) => state.api.api)
  const lang = 'tr'

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${il_adi}&units=metric&appid=${API_KEY}&lang=${lang}`

  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(url)
        setWeatherData(response.data)
        setLat(response.data.coord.lat)
        setLon(response.data.coord.lon)
      } catch (error) {
        setError(error.message);
      }
    }
    if (il_adi && API_KEY) {
      fetchWeatherData();
    }
  }, [il_adi, API_KEY, lang]);

  return {weatherData, error, lat, lon}
}

export default useWeatherData;
