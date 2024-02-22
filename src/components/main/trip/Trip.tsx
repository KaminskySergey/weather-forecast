'use client'

import { useEffect, useState } from "react";
import Search from "../../ui/search/Search";
import TripAdd from "./TripAdd";
import TripItem from "./TripItem"
import TripList from "./TripList"
import Modal from "@/components/ui/modal/Modal";
import FormAddTrip from "@/components/form/FormAddTrip";
import { useSeachCity } from "@/hooks/useSearchCity";
import Dropdown from "@/components/ui/dropdown/Dropdown";
import { useSortedTrips } from "@/hooks/useSortedTrips";
import { useSearchParams } from "next/navigation";
import { useParamsNameCity } from "@/hooks/useParamsNameCity";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";
import ButtonScroll from "@/components/ui/button-scroll/ButtonScroll";
import { IAddTrip, ITripItem } from "@/types/trip.interface";



interface ITripComponent {
  handleCityClick: (cityName: string, id: string) => void
  addTrip: (values: IAddTrip) => void
  cities: ITripItem[]
  nameIdActive: string
}

export const trips = [
    {
      id: 1,
      city: "Paris",
      startDate: new Date(2024, 2, 1), 
      endDate: new Date(2024, 2, 10),    
      photo: "/paris.jpg"
    },
    {
      id: 2,
      city: "Tokio",
      startDate: new Date(2024, 4, 15), 
      endDate: new Date(2024, 4, 25),   
      photo: "/tokio.jpg"
    },
    
    {
      id: 4,
      city: "London",
      startDate: new Date(2024, 8, 20), 
      endDate: new Date(2024, 8, 30),  
      photo: "/london.jpg"
    },
    
  ];
  

export default function TripComponent({nameIdActive, addTrip, handleCityClick, cities}: ITripComponent) {
  const [isOpen, setIsOpen] = useState(false);
  const { filteredCities } = useSeachCity(cities);
const {sortedTrips, sortByDate, handleDropdownChange} = useSortedTrips(filteredCities)
  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };
  const {createQueryString, router, pathname} = useParamsNameCity()  
  const {elementRef, handleScrollToStart , handleScrollToEnd, handleHorizantalScroll} = useHorizontalScroll()

  const handleClickItem = (cityName: string, id: string) => {
    router.push(pathname + '?' + createQueryString('city', cityName));
    handleCityClick(cityName, id);

  };
    return (
      <>
      <div className="flex items-center justify-between">
      <Search />
        <div className="flex items-center justify-between w-[25%]">
        <ButtonScroll elementRef={elementRef} handleScrollToStart={handleScrollToStart} handleScrollToEnd={handleScrollToEnd} handleHorizantalScroll={handleHorizantalScroll}/>
        <Dropdown sortByDate={sortByDate} handleDropdownChange={handleDropdownChange}/>
        </div>
      </div>
      <div className="flex">
      
      <TripList elementRef={elementRef}>
        {sortedTrips.map(el => (
            <TripItem key={el.id} trip={el} nameIdActive={nameIdActive} handleClickItem={handleClickItem}/> 
        ))}
    </TripList>
    <TripAdd handleToggle={handleToggle}/>
      </div>
      {isOpen && <Modal onClose={handleToggle}>
        
        <FormAddTrip handleToggle={handleToggle} addTrip={addTrip}/>
        
      </Modal>}
      </>
    )
}
