using System.Threading.Tasks;
using MyWeatherApp.Models;

namespace MyWeatherApp.Interfaces
{
    public interface IWeatherForecastService
    {
        Task<WeatherReport> GetWeatherReportAsync(string icao);
    }
}