import {useNavigate} from 'react-router-dom';
import {FaArrowLeft} from 'react-icons/fa';
import cities from '~/data/cities.json';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setCity} from "~/stores/citySlice.js";


export function WeatherHeader() {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {il_adi, plaka} = useSelector((state) => state.city)


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
    dispatch(setCity({il_adi: selectedCity.il_adi, plaka: selectedCity.plaka}));
    navigate(`/city/${selectedCity.plaka}`)
  }

  return (
    <div className="w-full h-[3rem] bg-[#060B16]">
      <div className="flex justify-between mx-auto max-w-[100rem] h-full">
        <button onClick={goBack} className="flex items-center ml-[1rem] space-x-2 text-white">
          <FaArrowLeft className="h-[3rem]"/>
          <span className="font-bold">Geri Dön</span>
        </button>
        <div className="flex justify-center items-center mr-[2rem]">
          <select
            name="city" id="city"
            className="h-[2rem] bg-[#060B16] border px-3 border-[#ccd0db] rounded-md w-[15rem] text-white appearance-none focus:outline-none"
            defaultValue={plaka}
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
