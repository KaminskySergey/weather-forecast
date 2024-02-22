import { CITIES_TO_LOCAL_STORAGE } from "@/const/local-storage";
import { SORT } from "@/const/sort";
import { ITripItem } from "@/types/trip.interface";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

interface IStartDate {
  startDate: string; 
}

export const useSortedTrips = (currentTrips: ITripItem[]) => {
  const [sortByDate, setSortByDate] = useState<'newest' | 'oldest'>(
    () => {
      const storedValue = localStorage.getItem(SORT);
      return (storedValue as 'newest' | 'oldest') || 'newest';
    }
  );
  
  // const [citiesData, setCitiesData] = useState<ITripItem[]>(currentTrips);

  const [currentCity, setCurrentCity] = useState<string>(() => {
    const storedCity = localStorage.getItem('currentCity');
    return storedCity || '';
  });

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sortByStartDate = (sort: string) => {
    return currentTrips.slice().sort((a: IStartDate, b: IStartDate) => {
      const dateA: bigint | number | any = new Date(a.startDate);
      const dateB: bigint | number | any = new Date(b.startDate);

      return sort === 'newest' ? dateB - dateA : dateA - dateB;
    });
  };

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      if (currentCity) {
        params.set('city', currentCity);
      }

      return params.toString();
    },
    [searchParams, currentCity]
  );

  const handleDropdownChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newSortByDate = e.target.value as 'newest' | 'oldest';
      const sortedTrips = sortByStartDate(newSortByDate);
  
      router.push(pathname + '?' + createQueryString('sort', newSortByDate));
      setSortByDate(newSortByDate);
  
      localStorage.setItem(SORT, newSortByDate);
      localStorage.setItem(CITIES_TO_LOCAL_STORAGE, JSON.stringify(sortedTrips));
    },
    [pathname, createQueryString, router, setSortByDate, sortByStartDate]
  );

  const sortedTrips = sortByStartDate(sortByDate);

  return { sortedTrips, setSortByDate, sortByDate, handleDropdownChange };
};