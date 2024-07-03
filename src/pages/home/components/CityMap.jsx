import TurkeyMap from 'turkey-map-react';
import {useEffect, useState} from "react";

export function CityMap() {
  const [position, setPosition] = useState({x: 0, y: 0})
  const [hoverName, setHoverName] = useState(null);
  const [hoverRegion, setHoverRegion] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({x: e.pageX + 10, y: e.pageY - 30})
    }
    document.documentElement.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div
      onMouseLeave={() => {
        setHoverRegion(false)
      }}
    >
      <TurkeyMap
        // viewBox={{width: 200, height: 200}}
        hoverable={true}
        customStyle={{idleColor: "#5C6272", hoverColor: "#E30A17"}}
        onHover={({name}) => {
          setHoverName(name)
          setHoverRegion(true)
          console.log('hoverRegion:', {hoverRegion}, 'hoverName:', {hoverName})
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
