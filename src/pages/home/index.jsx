import {CityList} from "~/pages/home/components/CityList.jsx";
import {CityMap} from "~/pages/home/components/CityMap.jsx";
import {Header} from "~/pages/home/components/Header.jsx";
import {useState} from "react";

export function Home() {

  const [activeComponent, setActiveComponent] = useState('list');

  return (
    <div>
      <Header activeComponent={activeComponent} setActiveComponent={setActiveComponent}/>
      {activeComponent === 'list' ? <CityList/> : <CityMap/>}
    </div>
  )
}
