'use client'

import { IWeatherDay } from "@/types/weather.interface";
import Title from "../../ui/title/title";
import WeatherItem from "./WeatherItem";
import WeatherList from "./WeatherList"


interface IWeather {
  weathers: IWeatherDay[] | null
}

const weatherForecast = [
    {
      day: 'Monday',
      date: '2024-02-20',
      temperature: {
        min: 5,
        max: 12
      },
      conditions: 'Clear',
      conditionImage: 'https://www.example.com/clear-image.jpg',
      windSpeed: 10,
      humidity: 60
    },
    {
      day: 'Tuesday',
      date: '2024-02-21',
      temperature: {
        min: 4,
        max: 10
      },
      conditions: 'Cloudy',
      conditionImage: 'https://www.example.com/cloudy-image.jpg',
      windSpeed: 15,
      humidity: 70
    },
    {
      day: 'Wednesday',
      datetime: '2024-02-22',
      tempmin: '7',
      tempmax: '11',
      conditions: 'Rain',
      conditionImage: 'https://www.example.com/rain-image.jpg',
      windSpeed: 12,
      humidity: 75
    },
    {
      day: 'Thursday',
      date: '2024-02-23',
      temperature: {
        min: 6,
        max: 14
      },
      conditions: 'Partly Cloudy',
      conditionImage: 'https://www.example.com/partly-cloudy-image.jpg',
      windSpeed: 8,
      humidity: 55
    },
    {
      day: 'Friday',
      date: '2024-02-24',
      temperature: {
        min: 2,
        max: 8
      },
      conditions: 'Snow',
      conditionImage: 'https://www.example.com/snow-image.jpg',
      windSpeed: 20,
      humidity: 80
    },
    {
      day: 'Saturday',
      date: '2024-02-25',
      temperature: {
        min: 7,
        max: 15
      },
      conditions: 'Clear',
      conditionImage: 'https://www.example.com/clear-image.jpg',
      windSpeed: 14,
      humidity: 50
    },
    {
      day: 'Sunday',
      date: '2024-02-26',
      temperature: {
        min: 8,
        max: 16
      },
      conditions: 'Cloudy',
      conditionImage: 'https://www.example.com/cloudy-image.jpg',
      windSpeed: 18,
      humidity: 65
    }
  ];

export default function WeatherComponent({weathers}: IWeather) {
  // const {elementRef, handleScrollToStart , handleScrollToEnd, handleHorizantalScroll} = useHorizontalScroll()
    return (
        <div className="mt-[16px]">
          <div className="flex items-center justify-between">
            <div>
            <Title tag="h2">Week</Title>
            </div>
            {/* <div>
              <ButtonScroll elementRef={elementRef} handleScrollToStart={handleScrollToStart} handleScrollToEnd={handleScrollToEnd} handleHorizantalScroll={handleHorizantalScroll}/>
            </div> */}
          </div>
          <WeatherList>
            {weathers?.map((el,idx) => (
                <WeatherItem key={idx} item={el} />
            ))}
        </WeatherList>
        </div>
    )
}
