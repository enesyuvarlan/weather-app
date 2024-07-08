// import {WeatherIcon} from "weather-icons-react"
import classNames from "classnames";

export function Icon({id}) {
  return (
    <WeatherIcon
      name="owm" iconId={id} className={classNames({
      "text-5xl my-4": true,
      "text-yellow-300": id === 800,
      "text-blue-300": id === 500,
      "text-red-300": id === 801,
      "text-red-400": id === 802,
      "text-blue-400": id === 803,
      "text-indigo-400": id === 804,
    })}/>
  )
}
