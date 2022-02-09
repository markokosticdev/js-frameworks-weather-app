import {Daily, Forecast, ForecastTile, ForecastType, Hourly} from "@js-frameworks-weather-app/weather-types";

export function filterForecast(forecast: Forecast, forecastType: ForecastType): Forecast {
  switch (forecastType) {
    case ForecastType.Hourly:
      forecast.hourly = forecast.hourly?.filter((hour, index) => index % 3 === 0).slice(0, 8);
      break;
    case ForecastType.Daily:
      forecast.daily = forecast.daily?.slice(0, 8);
      break;
  }

  return forecast;
}

export function createForecastTile(period: Hourly | Daily, forecastType: ForecastType): ForecastTile {
  switch (forecastType) {
    case ForecastType.Hourly:
      const hour = period as Hourly
      return {
        realTemp: hour.temp,
        feelsTemp: hour.feels_like,
        weatherIcon: hour.weather[0].icon_url,
        weatherTitle: hour.weather[0].main,
        weatherDescription: hour.weather[0].description
      };
    case ForecastType.Daily:
      const day = period as Daily
      return {
        realTemp: day.temp.day,
        feelsTemp: day.feels_like.day,
        weatherIcon: day.weather[0].icon_url,
        weatherTitle: day.weather[0].main,
        weatherDescription: day.weather[0].description
      };
  }
}
