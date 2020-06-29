using System.Net.Http;
using System.Threading.Tasks;
using MyWeatherApp.Interfaces;
using MyWeatherApp.Models;
using Newtonsoft.Json;

namespace MyWeatherApp.Services
{
    public class WeatherForecastService : IWeatherForecastService
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public WeatherForecastService(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        public async Task<WeatherReport> GetWeatherReportAsync(string icao)
        {
            var client = _httpClientFactory.CreateClient("weatherReport");
            
            var request = await client.GetAsync(icao);
            if (request.IsSuccessStatusCode == false)
                return null;
            
            var content = await request.Content.ReadAsStringAsync();
            WeatherReport weatherReport = JsonConvert.DeserializeObject<WeatherReport>(content);

            return weatherReport;
        }
    }
}