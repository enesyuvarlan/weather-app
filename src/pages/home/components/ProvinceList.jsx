import {ProvinceButton} from "~/pages/city/components/ProvinceButton.jsx";

export function ProvinceList() {
  return (
    <div>
      <div className="w-full">
        <input
          className="flex mt-16 text-white p-2 mx-auto h-[3rem] w-[20rem] bg-transparent border-[1px] border-[#] rounded-md"
          placeholder="Search"
        />
      </div>
      <div>
        <ProvinceButton/>
      </div>
    </div>
  )
}
