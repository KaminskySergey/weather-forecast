
import { staticTrips } from '@/api/trips';
import { CITIES_TO_LOCAL_STORAGE } from '@/const/local-storage';
import { useEffect, useState } from 'react';

export const useTripGetLocalStorage = () => {
  const localStorageKey = CITIES_TO_LOCAL_STORAGE;
    const [cities, setCities] = useState(() => {
      const storedData = localStorage.getItem(localStorageKey);
      return storedData ? JSON.parse(storedData) : staticTrips;
    });
  
    useEffect(() => {
      localStorage.setItem(localStorageKey, JSON.stringify(cities));
    }, [cities, localStorageKey]);
    
    const {city, startDate, endDate} = cities[0]

    return { cities, setCities, city, startDate, endDate};
  };
  
  export default useTripGetLocalStorage;