'use client'

import WeatherService from "@/services/weather/weather.service";
import { IWeatherDay } from "@/types/weather.interface";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";


export const useWeatherCurrentDay = (city: string) => {
  
  const [currentWeather, setCurrentWeather] = useState<IWeatherDay | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(true);
  const session = useSession()

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (session.data) {
                const {data} = await WeatherService.getWeatherCurrentDay(city);
                setCurrentWeather(data.days[0]);
                setAddress(data.address)
        } else {
            setCurrentWeather(null);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setCurrentWeather(null); 
        setLoading(false);
      }
    };

    fetchData();
  }, [city, session.data]);
  return { address, currentWeather, isLoading };
}