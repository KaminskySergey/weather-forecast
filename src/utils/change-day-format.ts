export function changeDayFormat(date: string) {
  const dateObject = new Date(date);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[dateObject.getDay()];
  return dayOfWeek;
}
