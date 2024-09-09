import {useState} from "react";
import useWeatherData from "~/services/useWeatherData.jsx";
import {useSelector} from "react-redux";
import {capitalizeFirstLetter, formatDate, roundTemperature} from "~/utils.js";
import {Graph} from "~/components/SvgGraph/Graph.jsx";
import useForecastData from "~/services/useForecastData.jsx";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export function WeatherContent() {

  const weatherMetrics = [
    {type: 'Sıcaklık', unit: '°C', key: 'temp_max', min: 0, max: 50, color: '#EB6E4B'},
    {type: 'Hissedilen', unit: '°C', key: 'feels_like', min: 0, max: 50, color: '#33C1FF'},
    {type: 'Nem', unit: '%', key: 'humidity', min: 0, max: 100, color: '#33FF57'},
    {type: 'Rüzgar', unit: 'm/s', key: 'wind_speed', min: 0, max: 25, color: '#FF33A1'},
  ];

  const {il_adi, plaka} = useSelector((state) => state.city)

  const {weatherData, error, weatherLoading} = useWeatherData()
  const {forecastData} = useForecastData()

  const [selectedMetric, setSelectedMetric] = useState(0);

  const fiveData = forecastData?.list ? forecastData.list.slice(0, 7) : [];
  const fiveDataDT = fiveData?.map(item => formatDate(item.dt))

  const fiveDataTemps = fiveData?.map(item => roundTemperature(item.main.temp_max))
  const fiveDataFeels = fiveData?.map(item => item.main.feels_like)
  const fiveDataHumidity = fiveData?.map(item => item.main.humidity)
  const fiveDataWind = fiveData?.map(item => item.wind.speed)


  const temperature = roundTemperature(weatherData?.main.temp)
  const cityName = weatherData?.name.split(' ')[0];
  const weatherDescription = capitalizeFirstLetter(weatherData?.weather[0].description);

  const iconCode = weatherData?.weather[0]?.icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
  const getMetricData = () => {
    switch (selectedMetric) {
      case 0:
        return fiveDataTemps;
      case 1:
        return fiveDataFeels;
      case 2:
        return fiveDataHumidity;
      case 3:
        return fiveDataWind;
      default:
        return fiveDataTemps;
    }
  };

  return (
    <div className="w-full">
      <div className="mx-auto max-w-[100rem]">
        <div className="mx-5">
          <div className="flex justify-between">
            <div className=" flex justify-center items-center gap-2 ">
              <div className="h-[9rem] w-full">
                {weatherLoading ? (
                  <Skeleton height="7rem" width="7rem" borderRadius="1rem" baseColor="#141d2e"
                            highlightColor="#28354d"/>
                ) : (
                  <img src={iconUrl} alt={weatherDescription} className="h-full w-full object-cover object-center"/>
                )}
              </div>
              <div className="text-white">
                {weatherLoading ? (
                  <Skeleton height="3rem" width="7rem" borderRadius="1rem" baseColor="#141d2e"
                            highlightColor="#28354d"/>
                ) : (
                  <span className="text-4xl font-semibold">{temperature}°</span>
                )}
              </div>
            </div>
            <div className="flex-col">
              <div>
                {weatherLoading ? (
                  <Skeleton height="3rem" width="7rem" borderRadius="1rem" baseColor="#141d2e"
                            highlightColor="#28354d"/>
                ) : (
                  <span className="text-white text-4xl font-semibold flex justify-end">{cityName}</span>
                )}
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
                  {weatherLoading ? (
                    <Skeleton height="2rem" width="7rem" borderRadius="1rem" baseColor="#141d2e"
                              highlightColor="#28354d"/>
                  ) : (
                    <span className="flex justify-end">{weatherDescription}</span>
                  )}
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
                    className={`w-full h-1 rounded-xl`}
                    style={{
                      backgroundColor: selectedMetric === index
                        ? weatherMetrics[selectedMetric].color
                        : 'transparent'
                    }}>
                  </div>
                </div>
              ))}
            </div>
            <div className="h-[23rem] w-full flex justify-center items-center">
              <div className="relative">
                {weatherLoading ? (
                  <Skeleton height="20rem" width="90rem" borderRadius="1rem" baseColor="#141d2e"
                            highlightColor="#28354d"/>
                ) : (
                  <div>
                    <Graph
                      data={[getMetricData()]}
                      colors={[weatherMetrics[selectedMetric].color]}
                      range={[weatherMetrics[selectedMetric].min, weatherMetrics[selectedMetric].max]}
                      labels={fiveDataDT}/>
                    <div className="mx-5 flex justify-between" style={{color: weatherMetrics[selectedMetric].color}}>
                      {getMetricData().map((item, index) => (
                        <div className="" key={index}>{item}{weatherMetrics[selectedMetric].unit}</div>
                      ))}
                    </div>
                  </div>)}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
