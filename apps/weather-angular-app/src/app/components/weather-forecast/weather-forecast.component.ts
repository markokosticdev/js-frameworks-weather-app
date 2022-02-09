import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {CityForecast, Forecast} from "@js-frameworks-weather-app/weather-types";
import {WeatherForecastApi} from "@js-frameworks-weather-app/weather-services";

@Component({
  selector: 'weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss'],
})
export class WeatherForecastComponent {

  data$: Observable<Forecast> | undefined;
  cityForecast: CityForecast | undefined;

  weatherService = new WeatherForecastApi();

  constructor(
    private router: Router,
  ) {
  }

  onSubmit(cityForecast: CityForecast) {
    if (cityForecast.city && cityForecast.forecastType) {
      this.cityForecast = cityForecast;
      this.data$ = this.weatherService.getWeatherForCity(cityForecast);
      this.router.navigate([cityForecast.city, cityForecast.forecastType]);
    }
  }
}
