import TurkeyMap from 'turkey-map-react';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {setCityValues} from "~/utils.js";
import useWeatherData from "~/services/useWeatherData.jsx";

export function CityMap() {
  const [position, setPosition] = useState({x: 0, y: 0})
  const [hoverName, setHoverName] = useState(null);
  const [hoverRegion, setHoverRegion] = useState(null);
  const navigate = useNavigate()
  const {lat, lon} = useWeatherData()

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({x: e.pageX + 10, y: e.pageY - 30})
    }
    document.documentElement.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const handleClick = async (plateNumber, name) => {
    setCityValues({il_adi: name, plaka: plateNumber, lat, lon})
    navigate(`/city/${plateNumber}`)
  }

  return (
    <div
      onMouseLeave={() => {
        setHoverRegion(false)
      }}
    >
      <TurkeyMap
        onClick={({plateNumber, name}) => {
          handleClick(plateNumber, name)
        }}
        hoverable={true}
        customStyle={{idleColor: "#5C6272", hoverColor: "#EB6E4B"}}
        onHover={({name}) => {
          setHoverName(name)
          setHoverRegion(true)
        }}
      />
      {hoverRegion && (
        <div
          className="fixed bg-white text-black p-2 rounded-lg shadow-lg font-medium"
          style={{left: position.x, top: position.y}}
        >
          {hoverName}
        </div>
      )}
    </div>
  )
}
