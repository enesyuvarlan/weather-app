import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import axios from "axios";

function useForecastData() {

  const {lat, lon} = useSelector((state) => state.city)
  // const API_KEY = useSelector((state) => state.api.api)
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

  const lang = 'tr'
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);
  const [forecastLoading, setForecastLoading] = useState(false);


  useEffect(() => {
    const fetchForecastData = async () => {
      setForecastLoading(true)
      try {
        const url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}&lang=${lang}`
        const response2 = await axios.get(url2)
        setForecastData(response2.data)
      } catch (error) {
        setError(error.message);
      } finally {
        setForecastLoading(false); // API isteği tamamlandıktan sonra loading false
      }
    }
    if (lat && lon) {
      fetchForecastData();
    }
  }, [lat, lon, lang]);

  return {error, forecastData, forecastLoading}
}

export default useForecastData;
