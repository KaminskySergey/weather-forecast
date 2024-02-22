import { ITripItem } from "@/types/trip.interface";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";

export const useParamsNameCity = (sortedTrips: ITripItem[]) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    const cityValue = sortedTrips.length > 0 ? sortedTrips[0].city : '';
    const newURL = pathname + '?' + createQueryString('city', cityValue);
    router.push(newURL);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { createQueryString, router, pathname };
};