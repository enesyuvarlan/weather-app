export function CityButton({city}) {

  return (
    <button
      className="group flex items-center h-[3.2rem] w-[15rem] border-[#5C6272] hover:border-[#E30A17] border-[1px] px-2 rounded-3xl hover:bg-[#E30A17]">
      <div className="group-hover:bg-white bg-[#E30A17] px-2 justify-center items-center w-9 h-9 flex rounded-full">
        <p className="text-white group-hover:text-[#E30A17] text-xl">{city.plaka}</p>
      </div>
      <div className="flex items-center justify-center w-full">
        <p className="text-white text-l">{city.il_adi}</p>
      </div>
    </button>
  )
}
