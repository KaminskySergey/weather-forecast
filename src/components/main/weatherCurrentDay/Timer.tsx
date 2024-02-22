'use client'

import { useTimer } from "@/hooks/useTimer";
import { upperCase } from "@/utils/upper-case";
interface ITimer {
    deadline: string
}

const Timer = ({ deadline }: ITimer) => {
  const {countdown} = useTimer(deadline)

  return (
    <div className="flex items-center justify-between gap-[16px]">
      <div className="flex flex-col justify-center items-center"> <p className="font-bold text-[24px]">{countdown.days}</p>  <p className="font-medium text-[14px]">{upperCase('days')}</p></div>
      <div className="flex flex-col justify-center items-center"> <p className="font-bold text-[24px]">{countdown.hours}</p> <p className="font-medium text-[14px]">{upperCase('hours')}</p></div>
      <div className="flex flex-col justify-center items-center"> <p className="font-bold text-[24px]">{countdown.minutes}</p> <p className="font-medium text-[14px]">{upperCase('minutes')}</p></div>
      <div className="flex flex-col justify-center items-center"> <p className="font-bold text-[24px]">{countdown.seconds}</p><p className="font-medium text-[14px]">{upperCase('seconds')}</p></div>
    </div>
  );
};

export default Timer;