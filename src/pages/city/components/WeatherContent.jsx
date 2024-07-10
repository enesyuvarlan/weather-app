import {useState} from "react";
import useWeatherData from "~/services/useWeatherData.jsx";
import {useSelector} from "react-redux";
import {roundTemperature, capitalizeFirstLetter} from "~/utils.js";

export function WeatherContent() {

  const weatherMetrics = [
    {type: 'Sıcaklık', unit: '°C'},
    {type: 'Hissedilen', unit: '°C'},
    {type: 'Nem', unit: '%'},
    {type: 'Rüzgar', unit: 'km/h'},
  ];

  const [selectedMetric, setSelectedMetric] = useState(0);
  const {il_adi, plaka} = useSelector((state) => state.city)
  const {weatherData, error} = useWeatherData()


  const temperature = roundTemperature(weatherData?.main.temp)
  const cityName = weatherData?.name.split(' ')[0];
  const weatherDescription = capitalizeFirstLetter(weatherData?.weather[0].description);

  const iconCode = weatherData?.weather[0]?.icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;


  return (
    <div className="w-full mt-1">
      <div className="mx-auto max-w-[100rem]">
        <div className="mx-5">
          <div className="flex justify-between">
            <div className=" flex justify-center items-center gap-2 ">
              <div className="h-[9rem] w-full">
                <img src={iconUrl} alt={weatherDescription} className="h-full w-full object-cover object-center"/>
              </div>
              <div className="text-white">
                <span className="text-4xl font-semibold">{temperature}°</span>
              </div>
            </div>
            <div className="flex-col">
              <div>
                <span className="text-white text-4xl font-semibold flex justify-end">{cityName}</span>
              </div>
              <div className="text-lg font-semibold mt-3 text-gray-400">
                <span className=" flex justify-end">
                  {new Date().toLocaleString('tr-TR', {
                    weekday: 'long',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
                <div>
                  <span className="flex justify-end">{weatherDescription}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex">
              {weatherMetrics.map((item, index) => (
                <div key={index} className="mx-1">
                  <button
                    className=" text-white font-semibold mr-2"
                    onClick={() => setSelectedMetric(index)}
                  >
                    {item.type}
                  </button>
                  <div
                    className={`w-full h-1 rounded-xl ${selectedMetric === index ? 'bg-[#EB6E4B]' : 'bg-transparent'}`}>
                  </div>
                </div>
              ))}
            </div>
            <div className="h-[25rem] w-full flex justify-center items-center">


              {/*<Graph*/}
              {/*  className={GraphCSS.svgComponentClass}*/}
              {/*  data={DATA} colors={COLORS} range={[0, 3000]}*/}
              {/*  labels={LABELS} title='$11,3K' subtitle='YTD Revenue'*/}
              {/*  legend={['Stream A', 'Stream B']}/>*/}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
