import {WeatherHeader} from "~/pages/city/components/WeatherHeader.jsx";
import {WeatherContent} from "~/pages/city/components/WeatherContent.jsx";
import {WeatherTab} from "~/pages/city/components/WeatherTab.jsx";

export function City() {
  return (
    <div>
      <WeatherHeader/>
      <WeatherContent/>
      <WeatherTab/>
    </div>
  )
}
