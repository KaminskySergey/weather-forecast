"use client"

import { ITripItem } from "@/types/trip.interface";
import { useSearch } from "./useSearch";



export const useSeachCity = (cities: ITripItem[]) => {
    const { searchQuery } = useSearch();

    const filteredCities = cities.filter(city =>
        city.city.trim().toLowerCase().includes(searchQuery.trim().toLowerCase())
    );
    
    return {
        filteredCities
    }
}