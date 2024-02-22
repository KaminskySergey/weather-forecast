'use client'

import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import { BsFillSkipStartBtnFill } from "react-icons/bs";
import { BsFillSkipEndBtnFill } from "react-icons/bs";
import { RefObject } from "react";


interface IButtonScroll {
    elementRef: RefObject<HTMLUListElement>;
    handleScrollToStart: () => void;
    handleScrollToEnd: () => void;
    handleHorizantalScroll: (element: any, speed: number, distance: number, step: number) => void;
}

export default function ButtonScroll({elementRef, handleHorizantalScroll, handleScrollToStart , handleScrollToEnd}: IButtonScroll) {
    return (
        <div className="flex">
            <div className="flex gap-2">
 <button onClick={handleScrollToStart} className="flex items-center justify-center w-6 h-6 bg-transparent text-white   disabled:opacity-50">
    <BsFillSkipStartBtnFill className="w-full h-full"/>
 </button>
  <button
    onClick={() => {
      handleHorizantalScroll(elementRef.current, 25, 100, -175);
    }}
    className="flex items-center justify-center w-6 h-6 bg-transparent text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 disabled:opacity-50"
  >
    <FaCircleArrowLeft className="w-full h-full" />
  </button>
            </div>

<div className="flex gap-2">

  <button
    onClick={() => {
      handleHorizantalScroll(elementRef.current, 25, 100, 175);
    }}
    className="flex items-center justify-center w-6 h-6 bg-transparent text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 disabled:opacity-50"
  >
    <FaCircleArrowRight className=" w-full h-full" />
  </button>
  <button onClick={handleScrollToEnd} className="flex items-center justify-center w-6 h-6 bg-transparent text-white disabled:opacity-50">
    <BsFillSkipEndBtnFill className="w-full h-full"/>
 </button>
</div>
</div>
    )
}
