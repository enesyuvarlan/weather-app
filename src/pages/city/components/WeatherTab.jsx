import useForecastData from "~/services/useForecastData.jsx";


export function WeatherTab() {

  const {forecastData} = useForecastData()

  const forecastList = (forecastData?.list || []).filter((_, index) => index % 8 === 0)

  return (
    <div className="w-full">
      <div className="mx-auto max-w-[90rem] ">
        <div className="justify-between grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {forecastList?.map((item, index) => {

            const date = new Date(item.dt_txt);
            const dayName = date.toLocaleDateString('tr-TR', {weekday: 'long'});
            const temp_max = item.main.temp_max.toFixed(0);
            const temp_min = item.main.temp_min.toFixed(0);
            const weatherDescription = item.weather[0].description;
            const iconCode = item.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

            return (
              <div
                key={index}
                className=" relative mx-auto overflow-hidden bg-transparent my-3 rounded-xl hover:bg-[opacity-50]">
                <span
                  className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-10 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"/>
                <div className="flex-row  min-w-[10rem] min-h-[10rem] h-[14rem] w-[14rem]">
                  <div className="flex justify-center items-center  w-full ">
                    <span className="text-white text-lg font-semibold">{dayName}</span>
                  </div>
                  <div className=" flex-row mt-2">
                    <div className="h-[8rem] w-full ">
                      <img
                        src={iconUrl} alt={weatherDescription}
                        className=" h-full w-full object-cover object-center"/>
                    </div>
                  </div>
                  <div className="flex-col">
                    <div className="flex justify-center">
                      <span className=" bottom-0 left-10 text-gray-300 text-lg">{weatherDescription}</span>
                    </div>
                    <div className="flex justify-center gap-1 mt-1">
                      <span className="text-white font-semibold text-lg">{temp_max}°</span>
                      <span className="text-gray-400 text-lg">{temp_min}°</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
