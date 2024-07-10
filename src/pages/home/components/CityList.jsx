import {CityButton} from "~/pages/home/components/CityButton.jsx";
import cities from '~/data/cities.json';
import {useState} from "react";

export function CityList() {
  const [searchTerm, setSearchTerm] = useState('')
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }
  const filteredCities = cities.filter(city => city.il_adi.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  )

  return (
    <div className="">
      <div className="mt-16">
        <label
          className="bg-[#060B16] group flex text-white p-2 mx-auto h-[3rem] w-[28rem] border border-white rounded-md focus-within:border-[#ccd0db]">
          <svg viewBox="0 0 24 24"
               className="text-white group-focus-within:text-[#ccd0db]">
            <path
              fill="currentColor"
              d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z">
            </path>
          </svg>
          <input
            className="ml-3 bg-transparent w-full outline-none text-lg  group-focus-within:placeholder:text-[#ccd0db]"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </label>
      </div>

      <div className="flex justify-center items-center ">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 ">
          {filteredCities.map((city) => (
            <CityButton key={city.plaka} il_adi={city.il_adi} plaka={city.plaka} lat={city.lat} lon={city.lon}/>
          ))}
        </div>
      </div>
    </div>
  )
}
