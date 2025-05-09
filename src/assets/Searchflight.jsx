import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaPlaneDeparture, FaPlaneArrival, FaExchangeAlt, FaCalendarAlt } from 'react-icons/fa';
const buttonicon = [
  { icon: "🏨" },
  { icon: "✈️" },
  { icon: "🚗" },
  { icon: "🚋" }
]

const Searchflight = () => {
    
  return (
    <>
      <div>
        <NavLink to="paymenthotel">
        <div className='bg-[#F3F5FA] flex justify-center items-center gap-10 h-15'>
          <h1 className='text-black text-xl font-bold m-5'>
            <span>{buttonicon[0].icon}</span> Flight
          </h1>
          <h1 className='text-black text-xl font-bold m-5'>
            <span>{buttonicon[1].icon}</span> Hotel
          </h1>
          <h1 className='text-black text-xl font-bold m-5'>
            <span>{buttonicon[2].icon}</span> Buses
          </h1>
          <h1 className='text-black text-xl font-bold m-5'>
            <span>{buttonicon[3].icon}</span> Train
          </h1>
        </div>
        <h1 className='m-5 text-4xl' >Seach Flight</h1>
       <p className='text-1xl font-medium m-10'>Enjoy hassle free flight tiket booking at lowest airfare</p>

       <div className="bg-white rounded-xl shadow-md p-6 max-w-4xl mx-auto space-y-4">
      {/* Trip Type & Passenger Info */}
      <div className="flex justify-between items-center border-b pb-4">
        <div className="flex space-x-4 text-gray-700 font-medium">
          <span className="cursor-pointer">→ One way</span>
        </div>
        <div className="cursor-pointer">👤 1 Adult, Economy ⌄</div>
      </div>

      {/* From/To Inputs */}
      <div className="flex items-center gap-4">
        <div className="flex items-center border rounded-lg px-3 py-2 w-full">
          <FaPlaneDeparture className="text-gray-500 mr-2" />
          <input type="text" placeholder="Where from?" className="w-full outline-none" />
        </div>

        <div className="text-gray-500">
          <FaExchangeAlt />
        </div>

        <div className="flex items-center border rounded-lg px-3 py-2 w-full">
          <FaPlaneArrival className="text-gray-500 mr-2" />
          <input type="text" placeholder="Where to?" className="w-full outline-none" />
        </div>
      </div>

      {/* Dates */}
      <div className="flex items-center gap-4">
        <div className="flex items-center border rounded-lg px-3 py-2 w-full">
          <FaCalendarAlt className="text-gray-500 mr-2" />
          <input type="text" placeholder="Fri, May 9" className="w-full outline-none" />
        </div>

        <div className="flex items-center border rounded-lg px-3 py-2 w-full text-gray-400">
          Return
        </div>
      </div>

      {/* Fares */}
      <div className="flex gap-2 flex-wrap">
        <span className="border rounded-full px-3 py-1 text-sm cursor-pointer">Senior citizen fare</span>
        <span className="border rounded-full px-3 py-1 text-sm cursor-pointer">Student fare</span>
        <span className="border rounded-full px-3 py-1 text-sm cursor-pointer">Armed forces fare</span>
      </div>

      {/* Work Deal + Button */}
      <div className="flex items-center justify-between mt-2">
        <label className="flex items-center gap-2 cursor-pointer bg-blue-50 px-3 py-2 rounded-md text-sm">
          <input type="checkbox" />
          <div>
            <span className="font-semibold">Unlock 10% extra savings</span> <span className="bg-orange-400 text-white px-1 py-0.5 rounded text-xs">NEW</span>
            <div className="text-gray-500 text-xs">Cleartrip for Work</div>
          </div>
        </label>

        <button className="bg-[#FF5B00] text-white font-semibold px-6 py-2 rounded-md hover:bg-orange-600 transition">
          Search flights
        </button>
      </div>
    </div>
    </NavLink>
      </div>
    </>
  )
}

export default Searchflight
