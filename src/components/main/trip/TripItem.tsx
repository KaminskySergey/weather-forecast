'use client'

import Image from "next/image"
import Title from "../../ui/title/title"
import { formatCustomDate } from "@/utils/format-date"
import styles from './trip.module.css'
import { ITripItem } from "@/types/trip.interface"
interface ITripCurrentItem {
  handleClickItem: (city: string, id: string) => void,
  trip: ITripItem
  nameIdActive: string
}

export default function TripItem({nameIdActive, trip, handleClickItem }: ITripCurrentItem) {
  const isActive = nameIdActive === trip.id;
    return (
      <li onClick={() => handleClickItem(trip.city, trip.id)} className={`w-[175px] h-[250px] bg-slate-700 rounded outline outline-offset-1 outline-2 ${isActive ? 'outline-yellow-500 outline-3': ''} flex-shrink-0`}>
        <div className="w-full h-3/4 relative rounded overflow-hidden">
          <Image
            width={0}
            height={0}
            alt={trip.city}
            src={trip.photo}
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className="p-1">
          <Title tag="h3">{trip.city}</Title>
          <p className="text-gray-500 text-[12px]">{formatCustomDate(trip.startDate)} - {formatCustomDate(trip.endDate)}</p>
        </div>
      </li>
    );
  }
