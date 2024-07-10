import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCity} from "~/stores/citySlice.js";
import {setCityValues} from "~/utils.js";

export function CityButton({il_adi, plaka, lat, lon}) {

  const navigate = useNavigate()
  const handleClick = () => {
    setCityValues({il_adi, plaka, lat, lon})
    navigate(`/city/${plaka}`)
  }

  return (
    <button
      onClick={() => {
        handleClick()
      }}
      className="bg-[#060B16] group flex items-center h-[3.2rem] w-[15rem] border-[#5C6272] hover:border-[#EB6E4B] border-[1px] px-[0.4rem] rounded-3xl hover:bg-[#EB6E4B]">
      <div
        className="group-hover:bg-white bg-[#EB6E4B] px-2 justify-center items-center w-[3rem] h-[2.4rem] flex rounded-full">
        <p className="text-white group-hover:text-[#E30A17] text-2xl">{plaka}</p>
      </div>
      <div className="flex items-center justify-center w-full">
        <p className="text-white text-xl">{il_adi}</p>
      </div>
    </button>
  )
}
