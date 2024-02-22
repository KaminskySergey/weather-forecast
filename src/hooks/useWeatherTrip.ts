import WeatherService from "@/services/weather/weather.service";
import { useEffect, useState } from "react";
import useTripGetLocalStorage from "./useTripGetLocalStorage";
import { ITripItem } from "@/types/trip.interface";

export const useWeatherTrip = (city: string, nameIdActive: string, cities: ITripItem[]) => {
    const [weatherTrip, setWeatherTrip] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [currentCityFromWeather, setCurrentCityFromWeather] = useState('');
   const { startDate, endDate} = useTripGetLocalStorage()
    const currentTrip = cities.find(el => el.id === nameIdActive);

    useEffect(() => {
        const baseUrl = window.location.href.split('?')[0];
    
        window.history.replaceState({}, document.title, baseUrl);
    
        const newUrl = `${baseUrl}?city=${currentTrip?.city}`;
        window.history.replaceState({}, document.title, newUrl);
        
      }, [currentTrip?.city]);
  

    useEffect(() => {
      const fetchData = async () => {
        try {
            let currentCity = city; 
            setCurrentCityFromWeather(currentCity)
          if (currentTrip) {
              currentCity = currentTrip.city;
              const { data } = await WeatherService.getWeatherTrip(currentCity, currentTrip.startDate, currentTrip.endDate);
              setWeatherTrip(data.days);
            } else {
                const { data } = await WeatherService.getWeatherTrip(currentCity, startDate, endDate);
                setWeatherTrip(data.days);
                // setCurrentCityFromWeather(currentCity)
            }
            
          setLoading(false);
        } catch (error) {
          console.error('Error fetching user data:', error);
          setWeatherTrip(null);
          setLoading(false);
        }
      };
  
      fetchData();
    }, [city, currentTrip, endDate, startDate]);

    return { weatherTrip, isLoading , currentCityFromWeather, currentTrip};
  };