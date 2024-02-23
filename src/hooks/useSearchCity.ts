"use client"

import { ITripItem } from "@/types/trip.interface";
import { useSearch } from "./useSearch";
import { CITIES_TO_LOCAL_STORAGE } from "@/const/local-storage";
import { useEffect, useState } from "react";
import { staticTrips } from "@/api/trips";



export const useSeachCity = () => {
    const { searchQuery } = useSearch();
    const localStorageKey = CITIES_TO_LOCAL_STORAGE;
  const [cities, setCities] = useState(() => {
    if (typeof window !== 'undefined') {

      const storedData = localStorage.getItem(localStorageKey);
      return storedData ? JSON.parse(storedData) : staticTrips;
    }
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(cities));
  }, [cities, localStorageKey]);
    const filteredCities = cities?.filter((city: ITripItem) =>
        city.city.trim().toLowerCase().includes(searchQuery.trim().toLowerCase())
    );
    
    return {
        filteredCities, setCities
    }
}