import {setApi} from "~/stores/apiKeySlice.js";
import {store} from "~/stores/store.js";

export const setApiKey = (key) => {
  store.dispatch(setApi(key))
}
export const validateApiKey = async key => {
  const response = await fetch('http://api.openweathermap.org/geo/1.0/direct?q=istanbul,turkey&appid=' + key)
  return response.status !== 401
}
