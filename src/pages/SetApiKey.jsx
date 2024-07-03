import {FaArrowRight} from "react-icons/fa";
import {useState} from "react";
import {ErrorPopUp} from "~/pages/home/components/ErrorPopUp.jsx";
import {InputContent} from "~/pages/home/components/InputContent.jsx";
import {TailSpin} from 'react-loader-spinner'
import {setApiKey, validateApiKey} from "~/utils.js";
import {useNavigate} from "react-router-dom";

export function SetApiKey() {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [key, setKey] = useState('')
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const response = await validateApiKey(key)
    setLoading(false)
    if (response) {
      setApiKey(key)
      setError(false)
      navigate('/')
    } else {
      setError(true)
    }
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex-col">
        <div className="relative mt-2">
          {error && (<ErrorPopUp/>)}
          <form onSubmit={handleSubmit}>
            <label
              className="group justify-center items-center flex text-white p-2 mx-auto h-[5rem] w-[28rem] border-[2px] border-[#A9ADB9] rounded-[4rem] focus-within:border-[#E7E9F1]">
              <input
                className="text-[2rem] ml-7 mr-3 bg-transparent w-full outline-none placeholder:text-[#A9ADB9] group-focus-within:placeholder:text-[#E7E9F1]"
                placeholder="Search"
                value={key}
                onChange={(e) => setKey(e.target.value)}

              />
              {key && (
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#E30A17] rounded-full h-[60px] w-[60px] "
                >
                  <div className="w-full h-full flex justify-center items-center">
                    {loading ? (
                      <TailSpin color="white" height="70" width="70"/>
                    ) : (
                      <FaArrowRight size={'60px'} className="text-white"/>
                    )}
                  </div>
                </button>
              )}
            </label>
          </form>
        </div>
        <InputContent/>
      </div>
    </div>
  )
}
