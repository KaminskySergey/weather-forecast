'use client'

import { EnumTripSort } from "@/types/sort.interface";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";


interface IDropdown { 
    sortByDate: string;
    handleDropdownChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function Dropdown({ sortByDate, handleDropdownChange }: IDropdown) {
    console.log(sortByDate)
    return (
        <div>
            <label >

                <select onChange={handleDropdownChange} value={sortByDate} className="appearance-none border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500 focus:bg-white"
>
                    {Object.values(EnumTripSort).map((option, index) => (
                        <option key={index} value={option} className="appearance-none border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500 focus:bg-white"
                        >
                            {option}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
}
