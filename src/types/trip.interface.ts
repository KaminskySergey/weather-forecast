export interface ITrip {
  address: string;
  days: ITripDay[];
  latitude: number;
  longitude: number;
  queryCost: number;
  resolvedAddress: string;
  stations: {
    [key: string]: {
      contribution: number;
      distance: number;
      id: string;
      latitude: number;
      longitude: number;
      name: string;
      quality: number;
      useCount: number;
    };
  };
  timezone: string;
  tzoffset: number;
  length: number;
}

export interface ITripItem {
  city: string;
  startDate: string;
  endDate: string;
  id: string;
  photo: string;
}

export interface ITripDay {
  cloudcover: number;
  conditions: string;
  datetime: string;
  datetimeEpoch: number;
  description: string;
  dew: number;
  feelslike: number;
  feelslikemax: number;
  feelslikemin: number;
  humidity: number;
  icon: string;
  moonphase: number;
  precip: number;
  precipcover: number;
  precipprob: number;
  preciptype: string[];
  pressure: number;
  severerisk: number;
  snow: number;
  snowdepth: number;
  solarenergy: number;
  solarradiation: number;
  source: string;
  stations: string[];
  sunrise: string;
  sunriseEpoch: number;
  sunset: string;
  sunsetEpoch: number;
  temp: number;
  tempmax: number;
  tempmin: number;
  uvindex: number;
  visibility: number;
  winddir: number;
  windgust: number;
  windspeed: number;
}

export interface IAddTrip {
  city: string;
  startDate: string;
  endDate: string;
}
