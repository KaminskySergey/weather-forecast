'use client'

import { changeDayFormat } from "@/utils/change-day-format";
import Title from "../../ui/title/title"
import Image from "next/image";
import {IconsWeather} from "@/components/ui/icons-weather/IconsWeather";
import { dateDay } from "@/utils/date-day";
import { IWeatherDay } from "@/types/weather.interface";

interface IWeatherItem {
    item: IWeatherDay
}


export default function WeatherItem({item}: IWeatherItem) {
    return <li style={{background: 'linear-gradient(rgb(37 0 228), rgb(202 194 18))'}} className="w-[120px] h-[170px] rounded-xl outline outline-offset-1 outline-2 outline-blue-500 text-center flex-shrink-0 flex flex-col items-center  p-[4px]">
        <div>
            <Title tag="h3">{changeDayFormat(item?.datetime)}</Title>
            <p className="font-bold">{dateDay(item?.datetime)}</p>
        </div>
        <div className="w-full h-[50%] relative rounded overflow-hidden">
        <IconsWeather weatherIcon={item.icon}/>
        
        </div>
        <div className="mt-[3px]">
        <p className="font-bold text-[12px]">{item?.tempmin}&deg;C / {item?.tempmax}&deg;C</p>
        </div>
    </li>
}
