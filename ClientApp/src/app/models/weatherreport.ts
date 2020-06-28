export interface Weatherreport {
  text: string;
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
  dateIssued: Date;
  visibilityDistance: string;
  pressure: number;
  windDirection: string;
  windSpeed: string;
}
