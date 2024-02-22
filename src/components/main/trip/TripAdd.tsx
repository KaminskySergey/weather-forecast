'use client'
import { LuPlus } from "react-icons/lu";

interface ITripAdd {
  handleToggle: () => void
}

export default function TripAdd({handleToggle}: ITripAdd) {
    return <div className="w-[175px] h-[250px] bg-transparent rounded flex-shrink-0 box-content pt-[2px] ml-[16px]">
        <div className="w-full h-3/4 relative rounded overflow-hidden bg-gray-100 opacity-30 flex items-center justify-center cursor-pointer">
          <div onClick={handleToggle} className="flex flex-col items-center">
          <LuPlus className="text-black w-[50px] h-[50px]"/>
          <p className="text-black font-bold">Add trip</p>
          </div>
        </div>
    </div>
}
