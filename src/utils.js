import {setApi} from "~/stores/apiKeySlice.js";
import {store} from "~/stores/store.js";
import {setCity} from "~/stores/citySlice.js";

export const setApiKey = (key) => {
  store.dispatch(setApi(key))
}
export const validateApiKey = async key => {
  const response = await fetch('http://api.openweathermap.org/geo/1.0/direct?q=istanbul,turkey&appid=' + key)
  return response.status !== 401
}

export const setCityValues = (city) => {
  store.dispatch(setCity(city))
}


export function roundTemperature(temp) {
  return Math.round(temp);
}

export function capitalizeFirstLetter(string) {
  if (!string) return ''
  return string.charAt(0).toUpperCase() + string.slice(1);
}
