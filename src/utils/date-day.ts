import { parseISO, format } from 'date-fns';
export function dateDay(inputStr: string){
    const dateObject = new Date(inputStr);

const monthNames = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"
];

const day = dateObject.getDate();
const monthIndex = dateObject.getMonth();

const formattedDate = day + ' ' + monthNames[monthIndex];
return formattedDate
}