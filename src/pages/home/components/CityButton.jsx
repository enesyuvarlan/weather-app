import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCity} from "~/stores/citySlice.js";

export function CityButton({il_adi, plaka}) {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(setCity({il_adi, plaka}))
    navigate(`/city/${plaka}`)
  }

  return (
    <button
      onClick={() => {
        handleClick()
      }}
      className="group flex items-center h-[3.2rem] w-[15rem] border-[#5C6272] hover:border-[#E30A17] border-[1px] px-[0.4rem] rounded-3xl hover:bg-[#E30A17]">
      <div
        className="group-hover:bg-white bg-[#E30A17] px-2 justify-center items-center w-[3rem] h-[2.4rem] flex rounded-full">
        <p className="text-white group-hover:text-[#E30A17] text-xl">{plaka}</p>
      </div>
      <div className="flex items-center justify-center w-full">
        <p className="text-white text-l">{il_adi}</p>
      </div>
    </button>
  )
}
