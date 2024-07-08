import {WiDayFog} from "weather-icons-react";


const array = [1, 1, 1, 1, 1, 1]

export function WeatherTab() {


  return (
    <div className="w-full mt-5 ">
      <div className="mx-auto max-w-[90rem] ">
        <div className="flex justify-between grid-cols-6">
          {array.map((index) => (
            <button
              key={index}
              className="relative overflow-hidden bg-transparent my-6 py-3 px-14 rounded-xl hover:bg-[opacity-50]">
              <span
                className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-10 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"/>
              <div className="flex justify-center items-center text-white font-semibold ">
                Cumartesi
              </div>
              <WiDayFog size={100} color='#fff'/>
              <div className="flex justify-center items-center gap-1">
                <span className="text-white font-semibold">{15}°</span>
                <span className="text-white ">{15}°</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
