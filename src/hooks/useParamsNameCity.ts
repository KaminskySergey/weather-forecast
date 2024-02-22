import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useParamsNameCity = () => {
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

return {createQueryString, router, pathname}
}