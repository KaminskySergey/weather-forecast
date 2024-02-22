import { ITripItem } from "@/types/trip.interface";


export const trips = [
  { id: '1', city: 'Kyiv', startDate: '2024-02-29', endDate: '2024-03-01', photo: '/kyiv.jpg' },
  { id: '2', city: 'Berlin', startDate: '2024-02-27', endDate: '2024-03-05', photo: '/berlin.jpg'}
]

const getFutureDate = (days: any) => {
  const today = new Date();
  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + days);

  const formattedDate = futureDate.toISOString().split('T')[0];

  return formattedDate;
};

const staticTrips = trips.map((trip: ITripItem, index: number) => {
  const daysToAdd = index === 0 ? 2 : 4; 
  const startDate = getFutureDate(daysToAdd);
  const endDate = getFutureDate(daysToAdd + 5); 
  return {
    ...trip,
    startDate,
    endDate
  };
});

export { staticTrips };