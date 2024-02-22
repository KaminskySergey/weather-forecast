'use client'

import Image from "next/image";

interface IIconsWeather {
    weatherIcon: string
}

export  function IconsWeather({weatherIcon}: IIconsWeather) {
    const renderIcon = (weatherIcon: string) => {
        switch (weatherIcon) {
            case 'rain':
                return <Image src={'/rain.png'} width={0} height={0} alt={weatherIcon} layout='fill'
                objectFit='cover'/>
            case 'sun':
                return <Image src={'/sun.png'} width={0} height={0} alt={weatherIcon} layout='fill'
                objectFit='cover'/>
            case 'cloudy':
                return <Image src={'/cloudy.png'} width={0} height={0} alt={weatherIcon} layout='fill'
                objectFit='cover'/>
            case 'snow':
                return <Image src={'/snow.png'} width={0} height={0} alt={weatherIcon} layout='fill'
                objectFit='cover'/>
            case 'partly-cloudy-day':
                return <Image src={'/partly-cloudy.png'} width={0} height={0} alt={weatherIcon} layout='fill'
                objectFit='cover'/>
            default:
                return <Image src={'/partly-cloudy.png'} width={0} height={0} alt={weatherIcon} layout='fill'
                objectFit='cover'/>
        }
    };
    return <div className="w-[90%]">{renderIcon(weatherIcon)}</div>
}


