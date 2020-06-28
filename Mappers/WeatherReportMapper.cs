using System.Globalization;
using System.Linq;
using MyWeatherApp.Models;
using MyWeatherApp.Models.Dtos;

namespace MyWeatherApp.Mappers
{
    public static class WeatherReportMapper
    {
        public static WeatherReportDto ToWeatherReportDto(WeatherReport weatherReport)
        {
            var forecastConditions = weatherReport.Report.Forecast.Conditions.FirstOrDefault();
            return new WeatherReportDto
            {
                DateIssued = weatherReport.Report.Conditions.DateIssued,
                Pressure = weatherReport.Report.Conditions.PressureHg,
                Temperature = weatherReport.Report.Conditions.TempC,
                VisibilityDistance = weatherReport.Report.Conditions.Visibility.DistanceSm,
                WindDirection = weatherReport.Report.Conditions.Wind.Direction.ToString(),
                WindSpeed = weatherReport.Report.Conditions.Wind.SpeedKts.ToString(),
                Text = weatherReport.Report.Conditions.Text,
                TafReport = new WeatherForeCastReport
                {
                    DateIssued = weatherReport.Report.Forecast.DateIssued,
                    VisibilityDistance = forecastConditions.Visibility.DistanceSm,
                    WindDirection = forecastConditions.Wind.Direction.ToString(),
                    WindSpeed = forecastConditions.Wind.SpeedKts.ToString(),
                    Text = weatherReport.Report.Forecast.Text
                }
            };
        }
    }
}