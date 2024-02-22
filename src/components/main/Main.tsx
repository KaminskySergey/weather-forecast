'use client'

import { TiWeatherSunny } from "react-icons/ti"
import Title from "../ui/title/title"
import Link from "next/link"
import WeatherComponent from "./weather/Weather"
import TripComponent from "./trip/Trip"
import { useEffect, useState } from "react"
import WeatherCurrentDay from "./weatherCurrentDay/WeatherCurrentDay"
import { v4 as uuidv4 } from 'uuid';
import useTripGetLocalStorage from "@/hooks/useTripGetLocalStorage"
import { IAddTrip, ITrip, ITripItem } from "@/types/trip.interface"
import { useWeatherTrip } from "@/hooks/useWeatherTrip"
import { useWeatherCurrentDay } from "@/hooks/useWeatherCurrentDay"
import { IWeatherDay } from "@/types/weather.interface"
import { UserProfile } from "../ui/user-profile/UserProfile"
import { useSeachCity } from "@/hooks/useSearchCity"
import { useSortedTrips } from "@/hooks/useSortedTrips"
interface IMain {
  address: string
 }

export default function MainComponent({ address }: IMain) {
  const uniqueId = uuidv4();
  const { filteredCities, setCities } = useSeachCity();
  const {sortedTrips, setSortByDate, sortByDate, handleDropdownChange} = useSortedTrips(filteredCities)
  const {  city } = useTripGetLocalStorage()
  const [currentCity, setCurrentCity] = useState(address);
  const [nameIdActive, setNameIdActive] = useState(sortedTrips.length > 0 ? sortedTrips[0].id : '');
  const [currentTripDate, setCurrentTripDate] = useState<string | null>('');
  const { weatherTrip, currentCityFromWeather, currentTrip } = useWeatherTrip(address, nameIdActive, sortedTrips)
  const {isLoading, currentWeather, address: currentDayCity} = useWeatherCurrentDay(currentTrip?.city ?? city)
  const addTrip = (newCity: IAddTrip) => {
    const newTrip = { ...newCity, id: uniqueId, photo: `/${newCity.city.toLowerCase()}.jpg` };
    const newCities = [...sortedTrips, newTrip];

    setCities(newCities);

  };
  const handleCityClick = (city: string, id: string) => {
    const currentTrip = sortedTrips.find((el: ITripItem) => el.id === id)
    const { startDate } = currentTrip as ITripItem;
    setCurrentTripDate(startDate);
    setNameIdActive(id)
    setCurrentCity(city);
  }
  return (
    <>
      <div className="p-[32px] w-[75%] flex flex-col gap-[16px] relative">
        <Link href={'/'} className="flex items-center w-[350px]">
          <TiWeatherSunny className="w-[36px] h-[36px] mr-1 text-yellow-500" />
          <Title tag='h1'>Weather <span className="font-bold">Forecast</span></Title>
        </Link>
        
        <TripComponent  nameIdActive={nameIdActive} addTrip={addTrip} sortByDate={sortByDate} handleDropdownChange={handleDropdownChange} sortedTrips={sortedTrips} handleCityClick={handleCityClick} />
        <WeatherComponent weathers={weatherTrip} />
        <UserProfile />
      </div>
      <div className="bg-white w-[25%] h-screen relative" style={{ backgroundImage: 'url(/wing.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <WeatherCurrentDay currentWeather={currentWeather as IWeatherDay} currentTripDate={currentTripDate === '' ? currentTrip?.startDate as string : currentTripDate as string} city={currentDayCity as string} />
      </div>
    </>
  )
}


