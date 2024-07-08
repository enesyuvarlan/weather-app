import {Icon} from "~/components/Icon.jsx";
import {WiDayFog} from "weather-icons-react";
import {useState} from "react";
import {Graph} from "~/components/SvgGraph/SvgGraph.jsx";
import GraphCSS from '~/components/SvgGraph/Graph.module.css'


const weatherMetrics = [
  {type: 'Sıcaklık', value: 25, unit: '°C'},
  {type: 'Hissedilen', value: 27, unit: '°C'},
  {type: 'Nem', value: 60, unit: '%'},
  {type: 'Rüzgar', value: 15, unit: 'km/h'},
];

const DATA = [
  [1131, 1604, 1240, 1731, 1304, 2101, 1701],
  [708, 1401, 1140, 1503, 1020, 1751, 902],
];
const COLORS = ['#b000f0', '#5637f4'];
const LABELS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'];

export function WeatherContent() {

  const [selectedMetric, setSelectedMetric] = useState(0);

  return (
    <div className="w-full mt-5">
      <div className="mx-auto max-w-[100rem]">
        <div className="mx-5">
          <div className="flex justify-between">
            <div className="flex justify-center items-center gap-2">
              <div className="">
                <WiDayFog size={100} color='#fff'/>
                {/*<Icon id={801}/>*/}
              </div>
              <div className="text-white">
                <span className="text-4xl font-semibold">{15}°</span>
              </div>
            </div>
            <div className="flex-col text-white">
              <div className="text-4xl font-semibold">Eskişehir</div>
              <div className="text-lg flex justify-end">Pazar - 03:00</div>
              <div className="text-lg flex justify-end">hafif yağmur</div>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex">
              {weatherMetrics.map((item, index) => (
                <div key={index} className="mx-1">
                  <button
                    className=" text-white font-semibold"
                    onClick={() => setSelectedMetric(index)}
                  >
                    {item.type}
                  </button>
                  <div
                    className={`w-full h-1 rounded-xl ${selectedMetric === index ? 'bg-[#E30A17]' : 'bg-transparent'}`}>
                  </div>
                </div>
              ))}
            </div>
            <div className="h-[25rem] w-full border">
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
