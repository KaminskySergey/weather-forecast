'use client'

import { EnumTripSort } from "@/types/sort.interface";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";


interface IDropdown { 
    sortByDate: string;
    handleDropdownChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function Dropdown({ sortByDate, handleDropdownChange }: IDropdown) {
    
    return (
        <div>
            <label >

                <select onChange={handleDropdownChange} value={sortByDate}>
                    {Object.values(EnumTripSort).map((option, index) => (
                        <option key={index} value={option} className="bg-white">
                            {option}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
}
