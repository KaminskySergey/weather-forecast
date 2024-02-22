import { instance } from "@/api/interceptor"

const WeatherService = {
    
    async getWeatherTrip(city: string, startDate: string, endDate: string) {
        return instance({
          url: `${city}/${startDate}/${endDate}`,
          method: 'GET',
        });
      },

      async getWeatherCurrentDay(city: string) {
        return instance({
          url: `${city}/today`,
          method: 'GET',
        });
      },
   }
   
   export default WeatherService