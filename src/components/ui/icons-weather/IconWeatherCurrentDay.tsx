'use client'
import { IoRainy } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";
import { IoMdCloudy } from "react-icons/io";
import { BsCloudSnowFill } from "react-icons/bs";
import { IoPartlySunny } from "react-icons/io5";
interface IIconWeatherCurrentDay {
    weatherIcon: string
}

export default function IconsWeatherCurrentDay({weatherIcon}: IIconWeatherCurrentDay) {
    const renderIcon = (weatherIcon: string) => {
        switch (weatherIcon) {
            case 'rain':
                return <IoRainy className="w-full h-full" />;
            case 'sun':
                return <IoIosSunny className="w-full h-full" />;
            case 'cloudy':
                return <IoMdCloudy className="w-full h-full" />;
            case 'snow':
                return <BsCloudSnowFill className="w-full h-full" />;
            case 'partly-cloudy-day':
                return <IoPartlySunny className="w-full h-full" />
            default:
                return null;
        }
    };
    return <div className="h-[64px]">{renderIcon(weatherIcon)}</div>
}
