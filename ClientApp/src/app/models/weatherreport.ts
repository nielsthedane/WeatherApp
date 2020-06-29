export interface Weatherreport {
  text: string;
  flightRules: string;
  dateIssued: Date;
  visibilityDistance: string;
  temperature: number;
  pressure: number;
  windDirection: string;
  windSpeed: string;
  tafReport: WeatherForecastReport;
}

export interface WeatherForecastReport {
  text: string;
  flightRules: string;
  dateIssued: Date;
  dateStart: Date;
  dateEnd: Date;
  visibilityDistance: string;
  windDirection: string;
  windSpeed: string;
}
