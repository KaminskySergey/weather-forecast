'use client'

import { ChangeEvent } from "react"
import Input from "../input/Input"
import { useSearch } from "@/hooks/useSearch";
import { FaSearch } from "react-icons/fa";

interface ISearch { }

export default function Search({ }: ISearch) {
    const { searchQuery, setSearchQuery } = useSearch();
    

    const handleInputChange = (value: string) => {
        setSearchQuery(value);
    };
    

    return <div className="w-[364px] relative">
        <FaSearch  className="absolute inset-y-1/4 left-[5px]"/>
        <Input placeholder="Search your trip" value={searchQuery} onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.value)}/>
    
    </div>
}
