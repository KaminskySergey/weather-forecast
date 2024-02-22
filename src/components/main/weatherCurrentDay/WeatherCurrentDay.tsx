'use client'

import { useEffect, useState } from "react";

import Title from "@/components/ui/title/title";
import { changeDayFormat } from "@/utils/change-day-format";
import TimeCalculate from "./Timer";
import Timer from "./Timer";
import IconsWeatherCurrentDay from "@/components/ui/icons-weather/IconWeatherCurrentDay";
import { useWeatherCurrentDay } from "@/hooks/useWeatherCurrentDay";
import useTripGetLocalStorage from "@/hooks/useTripGetLocalStorage";
import { IWeatherDay } from "@/types/weather.interface";

interface IweatherCurrentDay {
    city: string
    currentTripDate: string
    currentWeather: IWeatherDay
}

const weatherData = {
    address: "London",
    days: [
        {
            cloudcover: 90.6,
            conditions: "Rain, Overcast",
            datetime: "2024-02-19",
            datetimeEpoch: 1708300800,
            description: "Cloudy skies throughout the day with morning rain.",
            dew: 6.8,
            feelslike: 8.9,
            feelslikemax: 13,
            feelslikemin: 5,
            humidity: 81.8,
            icon: "rain",
            moonphase: 0.33,
            precip: 0.7,
            precipcover: 8.33,
            precipprob: 100,
            preciptype: ["rain"],
            pressure: 1029.4,
            severerisk: 10,
            snow: 0,
            snowdepth: 0,
            solarenergy: 5.4,
            solarradiation: 63.8,
            source: "comb",
            stations: ["EGWU", "EGLL", "D4121", "EGLC"],
            sunrise: "07:07:42",
            sunriseEpoch: 1708326462,
            sunset: "17:21:58",
            sunsetEpoch: 1708363318,
            temp: 9.9,
            tempmax: 13,
            tempmin: 7.6,
            uvindex: 4,
            visibility: 15.6,
            winddir: 261.1,
            windgust: 43.2,
            windspeed: 22.3,
        },
    ],
    latitude: 51.5064,
    longitude: -0.12721,
    queryCost: 1,
    resolvedAddress: "London, England, United Kingdom",
    stations: {
        D4121: {
            contribution: 0,
            distance: 17556,
            id: "D4121",
            latitude: 51.463,
            longitude: -0.371,
            name: "DW4121 London Heathow UK",
            quality: 0,
            useCount: 0,
        },
        EGLC: {
            contribution: 0,
            distance: 12300,
            id: "EGLC",
            latitude: 51.5,
            longitude: 0.05,
            name: "EGLC",
            quality: 50,
            useCount: 0,
        },
        EGLL: {
            contribution: 0,
            distance: 22564,
            id: "EGLL",
            latitude: 51.48,
            longitude: -0.45,
            name: "EGLL",
            quality: 50,
            useCount: 0,
        },
        EGWU: {
            contribution: 0,
            distance: 20850,
            id: "EGWU",
            latitude: 51.55,
            longitude: -0.42,
            name: "EGWU",
            quality: 50,
            useCount: 0,
        },
    },
    timezone: "Europe/London",
    tzoffset: 0,
    length: 1,
};




export default function WeatherCurrentDay({currentWeather, currentTripDate, city }: IweatherCurrentDay) {

    // const {address, isLoading, currentWeather} = useWeatherCurrentDay(city)
    return (
        <div className="flex items-center justify-center h-[100%] flex-col pl-[24px]">
        <div className="flex flex-col items-center relative">
        <div className="absolute top-[60px] left-[-20px] w-[50px] h-[50px]">
                    <IconsWeatherCurrentDay weatherIcon={currentWeather?.icon}/> 
                    </div>
            <div>
                <h2 className="text-[38px] font-bold">{changeDayFormat(currentWeather?.datetime)}</h2>
            </div>
            <div className="flex flex-col">
            
                <div className=" flex items-center gap-[10px]">
                    
                    <div className="flex font-bold">
                    
                    <p className="text-[42px]">
                {currentWeather?.temp}
            </p>
            &deg;C
                    </div>
                </div>
                <div>
                    <h3 className="m-0 text-xl font-semibold leading-6">{city}</h3>
                </div>
            </div>
        </div>
        <div className="mt-[128px]">
        <Timer deadline={currentTripDate} />
        </div>
    </div>
    );
}