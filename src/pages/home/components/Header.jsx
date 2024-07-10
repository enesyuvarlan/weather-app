import classNames from "classnames";

export function Header({activeComponent, setActiveComponent}) {
  return (
    <>
      <h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl text-white flex justify-center mt-10 font-bold"
      >
        Türkiye illere Göre Hava Durumu
      </h1>
      <div className="sticky top-10">
        <div
          className="border-[1px] border-[#5C6272] flex mt-10 mx-auto h-[3.5rem] w-[20rem] rounded-3xl bg-[#060B16] p-2 gap-1">
          <button
            onClick={() => setActiveComponent('list')}
            className={classNames("px-2 text-xl justify-center items-center w-[10rem] flex text-white rounded-3xl", {
              "bg-[#EB6E4B]": activeComponent === 'list'
            })}>
            <p>Şehir Listesi</p>
          </button>
          <button
            onClick={() => setActiveComponent('map')}
            className={classNames("px-2 text-xl justify-center items-center w-[10rem] flex text-white  rounded-3xl", {
              "bg-[#EB6E4B]": activeComponent === 'map'
            })}>
            <p>Harita</p>
          </button>
        </div>
      </div>
    </>
  )
}
