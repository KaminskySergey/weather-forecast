
import { CITIES_TO_LOCAL_STORAGE } from '@/const/local-storage';
import { ITripItem } from '@/types/trip.interface';
import { useEffect, useState } from 'react';

export const useTripGetLocalStorage = () => {
  const [storedData, setStoredData] = useState<ITripItem[] | null>(null);

  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem(CITIES_TO_LOCAL_STORAGE);

    if (dataFromLocalStorage) {
      try {
        const parsedData = JSON.parse(dataFromLocalStorage);
        setStoredData(parsedData);
      } catch (error) {
        console.error('Error parsing data from localStorage:', error);
      }
    }
  }, []);

  const { city = '', startDate = '', endDate = '' } = storedData?.[0] || {};

  return { storedData, setStoredData, city, startDate, endDate };
};
  
  export default useTripGetLocalStorage;