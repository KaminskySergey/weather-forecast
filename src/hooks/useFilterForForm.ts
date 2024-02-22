import { CITIES_TO_LOCAL_STORAGE } from "@/const/local-storage";
import { ITripItem } from "@/types/trip.interface";
import { useEffect, useState } from "react";

const cities = [
    'Kyiv',
    'Berlin',
    'Madrid',
    'Rome',
    'London',
    'Tokio',
    'Paris',

  ];

export const useFilterForForm = () => {
    const [dataArray, setDataArray] = useState([]);

useEffect(() => {
  const storedData = localStorage.getItem(CITIES_TO_LOCAL_STORAGE);

  if (storedData) {
    const parsedData = JSON.parse(storedData);

    setDataArray(parsedData);
  }
}, []);

const filteredCities = cities.filter(city => {
  return !dataArray.some((el: ITripItem) => el.city === city);
});

return {
  filteredCities
}
}