using System.Threading.Tasks;
using MyWeatherApp.Models;

namespace MyWeatherApp.Interfaces
{
    public interface IWeatherForecastService
    {
        Task<WeatherReport> GetWeatherReport(string icao);
    }
}