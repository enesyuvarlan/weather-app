import {ProvinceList} from "~/pages/home/components/ProvinceList.jsx";

export function Home() {
  return (
    <div>
      <h1 className="text-white flex justify-center mt-10 text-6xl font-bold">Türkiye illere Göre Hava Durumu</h1>
      <div className="">
        <div className="flex mt-10 mx-auto h-[4rem] w-[20rem] rounded-3xl bg-[#060B16] p-2 gap-1">
          <div className="px-2 text-xl justify-center items-center w-[10rem] flex text-white bg-[#E30A17] rounded-3xl">
            <p>Şehir Listesi</p>
          </div>
          <div className="px-2 text-xl justify-center items-center w-[10rem] flex text-white bg-[#E30A17] rounded-3xl">
            <p>Harita</p>
          </div>
        </div>
      </div>
      <ProvinceList/>
    </div>
  )
}
