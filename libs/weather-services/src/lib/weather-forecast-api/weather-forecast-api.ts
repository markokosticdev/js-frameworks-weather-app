import {filter, map, Observable, switchMap} from "rxjs";
import {CityForecast, Coordinate, Forecast, ForecastType} from "@js-frameworks-weather-app/weather-types";
import {Axios} from "axios-observable";

export class WeatherForecastApi {

  private _apiKey = '010721642521f31b0fbc8c3831d45951';

  private getCoordinatesForCity(city: string): Observable<Coordinate> {
    const path = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${this._apiKey}`;

    return Axios.get<Coordinate[]>(path).pipe(
      map(response => response.data),
      map(coordinates => coordinates[0]),
    );
  }

  private getWeatherIconUrl(forecast: Forecast, forecastType: ForecastType): Forecast {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    forecast[forecastType] = forecast[forecastType].map(forecastPeriod => {
      forecastPeriod.weather = forecastPeriod.weather.map(weather => ({
        ...weather,
        icon_url: `https://openweathermap.org/img/wn/${weather.icon}@2x.png`
      }))
      return forecastPeriod;
    })

    return forecast;
  }

  getWeatherForCity(cityForecast: CityForecast): Observable<Forecast> {
    return this.getCoordinatesForCity(cityForecast.city).pipe(
      filter(coordinate => coordinate != undefined),
      switchMap(coordinate => {
        const forecastType = cityForecast.forecastType == ForecastType.Hourly ? ForecastType.Daily : ForecastType.Hourly;

        const path = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinate.lat}&lon=${coordinate.lon}&exclude=current,minutely,${forecastType},alerts&units=metric&appid=${this._apiKey}`;

        return Axios.get<Forecast>(path).pipe(
          map(response => response.data),
          map(forecast => {
            return this.getWeatherIconUrl(forecast, cityForecast.forecastType)
          }),
        );
      }),
    );
  }

  getHourlyWeatherForCity(city: string): Observable<Forecast> {
    return this.getWeatherForCity({city, forecastType: ForecastType.Hourly});
  }

  getDailyWeatherForCity(city: string): Observable<Forecast> {
    return this.getWeatherForCity({city, forecastType: ForecastType.Daily});
  }
}
