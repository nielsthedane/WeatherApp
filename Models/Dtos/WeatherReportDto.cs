using System;
using System.Globalization;

namespace MyWeatherApp.Models.Dtos
{
    public class WeatherReportDto
    {
        public string Text { get; set; }
        public string FlightRules { get; set; }
        public string DateIssued { get; set; }
        public double VisibilityDistance { get; set; }
        public double Temperature { get; set; }
        public double Pressure { get; set; }
        public string WindDirection { get; set; }
        public string WindSpeed { get; set; }
        public WeatherForeCastReport TafReport { get; set; }
    }

    public class WeatherForeCastReport
    {
        public string Text { get; set; }
        public string FlightRules { get; set; }
        public string DateIssued { get; set; }
        public string DateStart { get; set; }
        public string DateEnd { get; set; }
        public double VisibilityDistance { get; set; }
        public string WindDirection { get; set; }
        public string WindSpeed { get; set; }
    }
}