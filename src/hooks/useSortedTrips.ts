import { ITripItem } from "@/types/trip.interface";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

interface IStartDate {
  startDate: string; 
}

export const useSortedTrips = (currentTrips: ITripItem[]) => {
  const [sortByDate, setSortByDate] = useState<'newest' | 'oldest'>('newest');
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();


  const createQueryString = useCallback(
      (name: string, value: string) => {
          const params = new URLSearchParams(searchParams.toString())
          params.set(name, value)
          return params.toString()
      },
      [searchParams]
  );

  const handleDropdownChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortByDate = e.target.value as 'newest' | 'oldest';
    router.push(pathname + '?' + createQueryString('sort', newSortByDate));
    setSortByDate(newSortByDate);
}, [pathname, createQueryString, router, setSortByDate]);

  const sortByStartDate = (sort: string) => {
      return currentTrips.slice().sort((a: IStartDate, b: IStartDate) => {
          const dateA: bigint | number | any = new Date(a.startDate);
          const dateB: bigint | number | any = new Date(b.startDate);

          return sort === 'newest' ? dateB - dateA : dateA - dateB;
      });
  };

  const sortedTrips = sortByStartDate(sortByDate);

  return { sortedTrips, setSortByDate, sortByDate, handleDropdownChange };
  
  };
  