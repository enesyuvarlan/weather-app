import {useNavigate} from 'react-router-dom';
import cities from '~/data/cities.json';
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {setCityValues} from "~/utils.js"
import useWeatherData from "~/services/useWeatherData.jsx";
import {IoIosArrowBack} from "react-icons/io";

export function WeatherHeader() {

  const navigate = useNavigate();
  const {plaka} = useSelector((state) => state.city);
  const storedPlate = sessionStorage.getItem('plaka') || plaka;
  const {lat, lon} = useWeatherData()


  useEffect(() => {
    if (plaka) {
      const citySelect = document.getElementById('city');
      citySelect.value = plaka;
    }
  }, [plaka]);
  const goBack = () => {
    navigate(-1);
  };

  const handleCityChange = (e) => {
    const selectedCityPlate = parseInt(e.target.value)
    const selectedCity = cities.find(city => city.plaka === selectedCityPlate);
    if (selectedCity) {
      setCityValues({il_adi: selectedCity.il_adi, plaka: selectedCity.plaka, lat, lon});
      navigate(`/city/${selectedCity.plaka}`);
    }
  }

  return (
    <div className="w-full h-[3.5rem] bg-[#060B16]">
      <div className="flex justify-between items-center mx-auto max-w-[100rem] h-full">
        <button
          onClick={goBack}
          className="flex items-center h-[2.5rem] p-2 rounded-xl ml-[1rem]
          space-x-1 text-white text-xl bg-[#EB6E4B] hover:brightness-125 "
        >
          <IoIosArrowBack size={'1.8rem'}/>
          <span className="font-semibold">Geri Dön</span>
        </button>
        <div className="flex justify-center items-center mr-[2rem]">
          <select
            name="city" id="city"
            className="h-[2.5rem] text-lg bg-[#060B16] border px-3 border-[#ccd0db] rounded-md w-[15rem] text-white appearance-none focus:outline-none"
            defaultValue={storedPlate}
            onChange={handleCityChange}
          >
            {cities.map((city) => (
              <option key={city.plaka} value={city.plaka}>
                {city.il_adi}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
